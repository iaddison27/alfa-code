import React, { Component } from 'react';

class ImmobRow extends Component {

    isSignificantByte(header, index, bytePositions) {
        return this.isArrayInArray(bytePositions, [header, index]);
    }

    isArrayInArray(array, item) {
        const itemAsJsonString = JSON.stringify(item);
        return array.some(function (e) {
            return JSON.stringify(e) === itemAsJsonString;
        });
    }

    assignCssClass(header, index, bytePositions) {
        const rowNumber = Number(header);
        let cssClass;

        if (this.isSignificantByte(rowNumber, index, bytePositions.purple)) {
            cssClass = 'purple';
        } else if (this.isSignificantByte(rowNumber, index, bytePositions.red)) {
            cssClass = 'red';
        } else if (this.isSignificantByte(rowNumber, index, bytePositions.green)) {
            cssClass = 'green';
        } else if (this.isSignificantByte(rowNumber, index, bytePositions.blue)) {
            cssClass = 'blue';
        } else if (this.isSignificantByte(rowNumber, index, bytePositions.yellow)) {
            cssClass = 'yellow';
        }
        return cssClass;
    }

    render() {
        const header = this.props.header;
        const bytePositions = this.props.bytePositions;
        return (
            <tr>
                <td>{header}</td>
                {this.props.data.map((name, index) => {
                    return (
                        <td key={index} className={this.assignCssClass(header, index, bytePositions)}>
                            {name}
                        </td>
                    );
                })}
            </tr>
        );
    }
}

export default ImmobRow;
