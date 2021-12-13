import React, { Component } from 'react';
import DecodeService from '../../services/DecodeService.js';
import Array2dContext from "../../context/array-2d-context";

class KeyByte extends Component {
    static contextType = Array2dContext;

    colourByteForKey(array2d, bytePositions, colour, keyPosition) {
        if (array2d) {
            return DecodeService.getByteAtPositionAsHex(
                /*array2d,*/ this.context,
                bytePositions,
                colour,
                keyPosition
            );
        }
        return null;
    }

    render() {
        const array2d = this.context;
        const bytePositions = this.props.bytePositions;
        const colour = this.props.colour;
        const keyPosition = this.props.keyPosition;

        return (
            <td className={colour}>
                {this.colourByteForKey(array2d, bytePositions, colour, keyPosition)}
            </td>
        );
    }
}

export default KeyByte;
