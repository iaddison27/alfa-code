import React, { Component } from 'react';
import ImmobData from './ImmobData.js';

class Grid extends Component {
    render() {
        const bytePositions = this.props.bytePositions;
        return (
            <div>
                <hr />
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th>0</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                        <th>D</th>
                        <th>E</th>
                        <th>F</th>
                    </tr>
                    </thead>
                    <tbody>
                        <ImmobData bytePositions={bytePositions} />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Grid;
