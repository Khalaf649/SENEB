import { Request, Response, NextFunction } from 'express';
import cloudinary from '../config/cloudinary';

export const uploadToCloudinary = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.file){
       res.status(400).json({ message: 'No file uploaded' });
       return;
    }

    const streamUpload = (fileBuffer: Buffer): Promise<string> => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({ folder: 'donors' }, (err, result) => {
          if (err) reject(err);
          else if (result) resolve(result.secure_url);
        });
        stream.end(fileBuffer);
      });
    };

    const imageUrl = await streamUpload(req.file.buffer);
    req.body.donor_image = imageUrl;
    next();
  } catch (err) {
    next(err);
  }
};
