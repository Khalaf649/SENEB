import multer from 'multer';

const storage = multer.memoryStorage(); // stores in memory for cloudinary upload

export const upload = multer({ storage });
