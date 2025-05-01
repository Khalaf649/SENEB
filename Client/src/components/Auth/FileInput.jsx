import React, {useState} from "react";

const FileInput = ({ label, onChange }) => {

    const [preview, setPreview] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if(file) {
            setPreview(URL.createObjectURL(file));
            onChange(file);
        }
    }

    return(
        <div className="input-field">
            <label>{label}</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {preview && (
                <div className="image-preview mt-2">
                    <img src={preview} alt="Preview" style={{ width: '100px', borderRadius: '8px' }}/>
                </div>                
            )}
        </div>
    );
};

export default FileInput;