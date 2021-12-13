import React, { Component } from 'react';
import ImmobRow from './ImmobRow.js';
import Array2dContext from "../../context/array-2d-context";

class ImmobData extends Component {
    static contextType = Array2dContext;

    render() {
        const hex = this.context;
        const bytePositions = this.props.bytePositions;
        return (
            <React.Fragment>
            {hex?.map(function(row, index) {
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
}

export default ImmobData;
