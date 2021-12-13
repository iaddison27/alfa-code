import {render} from "@testing-library/react";
import KeyChecksum1 from "./KeyChecksum1";
import Array2dContext from "../../context/array-2d-context";

const array2d = [
    ['ff', 'ae', 'f1', 'e6', 'ce'],
];
const bytePositions = {
    red: [
        [0, 0]
    ],
    yellow: [
        [0, 1]
    ],
    green: [
        [0, 2]
    ],
    blue: [
        [0, 3]
    ],
    purple: [
        [0, 4]
    ],
};
const keyPosition = 0;

test('should display the correct checksum', () => {
    const { container } = render(
        <Array2dContext.Provider value={array2d}>
            <table>
                <tbody>
                    <tr>
                        <KeyChecksum1 bytePositions={bytePositions} keyPosition={keyPosition} />
                    </tr>
                </tbody>
            </table>
        </Array2dContext.Provider>
    );
    expect(container.querySelector('td')).toHaveTextContent('85');
});
