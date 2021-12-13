import React, { Component } from 'react';
import KeyByte from './KeyByte.js';
import KeyChecksum1 from './KeyChecksum1.js';
import KeyChecksum2 from './KeyChecksum2.js';

class Key extends Component {
    render() {
        const bytePositions = this.props.bytePositions;
        const keyName = this.props.keyName;
        const keyPosition = this.props.keyPosition;
        return (
            <tr>
                <td>{keyName}:</td>
                <td>80</td>
                <td>21</td>
                <td>2C</td>
                <KeyByte
                    colour={'yellow'}
                    bytePositions={bytePositions}
                    keyPosition={keyPosition}
                />
                <KeyByte
                    colour={'green'}
                    bytePositions={bytePositions}
                    keyPosition={keyPosition}
                />
                <KeyByte
                    colour={'blue'}
                    bytePositions={bytePositions}
                    keyPosition={keyPosition}
                />
                <KeyByte
                    colour={'purple'}
                    bytePositions={bytePositions}
                    keyPosition={keyPosition}
                />
                <KeyByte
                    colour={'red'}
                    bytePositions={bytePositions}
                    keyPosition={keyPosition}
                />
                <KeyChecksum1
                    bytePositions={bytePositions}
                    keyPosition={keyPosition}
                />
                <KeyChecksum2
                    bytePositions={bytePositions}
                    keyPosition={keyPosition}
                />
            </tr>
        );
    }
}

export default Key;
