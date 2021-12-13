import React, { useContext } from 'react';
import ImmobRow from './ImmobRow.js';
import Array2dContext from "../../context/array-2d-context";

function ImmobData(props) {
        const array2d = useContext(Array2dContext);
        const bytePositions = props.bytePositions;
        return (
            <React.Fragment>
            {array2d?.map(function(row, index) {
                return (
                    <ImmobRow
                        key={index}
                        header={'0' + index}
                        data={row}
                        bytePositions={bytePositions}
                    />
                );
            })}
            </React.Fragment>
        );
}

export default ImmobData;
