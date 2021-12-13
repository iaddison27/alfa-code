import { useState } from 'react';
import DecodeService from '../../services/DecodeService';

function FileUpload(props) {
    const [selectedFile, setSelectedFile] = useState();

    const onFormSubmit = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = () => {
            const hexArray = DecodeService.convertToHexArray(reader.result);
            props.onFileDecode(hexArray);
        };
        reader.readAsBinaryString(selectedFile);
    }

    const onChange = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <h2>File Upload</h2>
            <input data-testid="file-select" type="file" onChange={onChange} />
            <button data-testid="btn-submit" type="submit" disabled={!selectedFile}>
                Decode
            </button>
        </form>
    );
}

export default FileUpload;
