import React, { Component } from 'react';
import DecodeService from '../../services/DecodeService.js';
import Array2dContext from "../../context/array-2d-context";

class KeyChecksum1 extends Component {
    static contextType = Array2dContext;

    render() {
        const array2d = this.context;
        const bytePositions = this.props.bytePositions;
        const keyPosition = this.props.keyPosition;
        return (
            <td>{DecodeService.checksum1(array2d, bytePositions, keyPosition)}</td>
        );
    }
}

export default KeyChecksum1;
