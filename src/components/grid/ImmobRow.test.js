import { render } from "@testing-library/react";
import ImmobRow from "./ImmobRow";

const data =  ['ff', 'ae', 'f1', 'e6', 'ce'];
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
test('should display the correct header for the row', () => {
    const { container } = render(
        <table>
            <tbody>
                <ImmobRow
                    header={'00'}
                    data={data}
                    bytePositions={bytePositions} />
            </tbody>
        </table>
    );

    expect(container.querySelector('td:nth-child(1)')).toHaveTextContent('00');
});

test('should assign the correct CSS colour class', () => {
    const { container } = render(
        <table>
            <tbody>
            <ImmobRow
                header={'00'}
                data={data}
                bytePositions={bytePositions} />
            </tbody>
        </table>
    );

    expect(container.querySelector('td.yellow')).toHaveTextContent('ae');
});

test('should display a single row of immobilizer data', () => {
    const { container } = render(
        <table>
            <tbody>
            <ImmobRow
                header={'00'}
                data={data}
                bytePositions={bytePositions} />
            </tbody>
        </table>
    );

    expect(container.querySelector('td:nth-child(2)')).toHaveTextContent('ff');
    expect(container.querySelector('td:nth-child(3)')).toHaveTextContent('ae');
    expect(container.querySelector('td:nth-child(4)')).toHaveTextContent('f1');
    expect(container.querySelector('td:nth-child(5)')).toHaveTextContent('e6');
    expect(container.querySelector('td:nth-child(6)')).toHaveTextContent('ce');
});
