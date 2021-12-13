import { render } from '@testing-library/react';
import KeyByte from "./KeyByte";
import Array2dContext from "../../context/array-2d-context";

const array2d = [
    ['ff', 'ae', 'f1', 'e6', 'ce'],
    ['f1', '56', '5a', 'ab', 'ff'],
];
const bytePositions = {
    red: [
        [1, 3]
    ],
};
const keyPosition = 0;

test('td should have the colour CSS class', () => {
    const { container } = render(
        <Array2dContext.Provider value={array2d}>
            <table>
                <tbody>
                    <tr>
                        <KeyByte colour={'red'}
                                 array2d={array2d}
                                 bytePositions={bytePositions}
                                 keyPosition={keyPosition} />
                    </tr>
                </tbody>
            </table>
        </Array2dContext.Provider>
    );
    expect(container.querySelector('td')).toHaveClass('red')
});

test('td should display the correct byte value given the data', () => {
    const { container } = render(
        <Array2dContext.Provider value={array2d}>
            <table>
                <tbody>
                    <tr>
                        <KeyByte colour={'red'}
                                 array2d={array2d}
                                 bytePositions={bytePositions}
                                 keyPosition={keyPosition} />
                    </tr>
                </tbody>
            </table>
        </Array2dContext.Provider>
    );
    expect(container.querySelector('td.red')).toHaveTextContent('ab');
});
