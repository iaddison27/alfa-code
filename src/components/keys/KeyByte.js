import { useContext } from 'react';
import DecodeService from '../../services/DecodeService.js';
import Array2dContext from "../../context/array-2d-context";

function KeyByte(props) {
    const array2d = useContext(Array2dContext);

    const colourByteForKey = (bytePositions, colour, keyPosition) => {
        if (array2d) {
            return DecodeService.getByteAtPositionAsHex(
                array2d,
                bytePositions,
                colour,
                keyPosition
            );
        }
        return null;
    }

    const bytePositions = props.bytePositions;
    const colour = props.colour;
    const keyPosition = props.keyPosition;

    return (
        <td className={colour}>
            {colourByteForKey(bytePositions, colour, keyPosition)}
        </td>
    );
}

export default KeyByte;
