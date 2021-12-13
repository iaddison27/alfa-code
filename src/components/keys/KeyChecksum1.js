import { useContext } from 'react';
import DecodeService from '../../services/DecodeService.js';
import Array2dContext from "../../context/array-2d-context";

function KeyChecksum1(props) {
    const array2d = useContext(Array2dContext);
    const bytePositions = props.bytePositions;
    const keyPosition = props.keyPosition;
    return (
        <td>{DecodeService.checksum1(array2d, bytePositions, keyPosition)}</td>
    );
}

export default KeyChecksum1;
