import Key from './Key.js';

function Keys(props) {
    const bytePositions = props.bytePositions;
    return (
        <div>
            <h2>Keys</h2>
            <table>
                <tbody>
                <Key
                    bytePositions={bytePositions}
                    keyName="Master"
                    keyPosition={0}
                />
                <Key
                    bytePositions={bytePositions}
                    keyName="Key 1"
                    keyPosition={1}
                />
                <Key
                    bytePositions={bytePositions}
                    keyName="Key 2"
                    keyPosition={2}
                />
                </tbody>
            </table>
        </div>
    );
}

export default Keys;
