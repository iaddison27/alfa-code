import React, { Component } from 'react';
import DecodeService from '../../services/DecodeService';

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
        };
        this.onChange = this.onChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = () => {
            const hexArray = DecodeService.convertToHexArray(reader.result);
            this.props.onFileDecode(hexArray);
        };
        reader.readAsBinaryString(this.state.selectedFile);
    }

    onChange(e) {
        this.setState({ selectedFile: e.target.files[0] });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h2>File Upload</h2>
                <input data-testid="file-select" type="file" onChange={this.onChange} />
                <button data-testid="btn-submit" type="submit" disabled={!this.state.selectedFile}>
                    Decode
                </button>
            </form>
        );
    }
}

export default FileUpload;
