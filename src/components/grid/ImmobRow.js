function ImmobRow(props) {

    const isSignificantByte = (header, index, bytePositions) => {
        return isArrayInArray(bytePositions, [header, index]);
    }

    const isArrayInArray = (array, item) => {
        const itemAsJsonString = JSON.stringify(item);
        return array.some(function (e) {
            return JSON.stringify(e) === itemAsJsonString;
        });
    }

    const assignCssClass = (header, index, bytePositions) => {
        const rowNumber = Number(header);
        let cssClass;

        if (isSignificantByte(rowNumber, index, bytePositions.purple)) {
            cssClass = 'purple';
        } else if (isSignificantByte(rowNumber, index, bytePositions.red)) {
            cssClass = 'red';
        } else if (isSignificantByte(rowNumber, index, bytePositions.green)) {
            cssClass = 'green';
        } else if (isSignificantByte(rowNumber, index, bytePositions.blue)) {
            cssClass = 'blue';
        } else if (isSignificantByte(rowNumber, index, bytePositions.yellow)) {
            cssClass = 'yellow';
        }
        return cssClass;
    }

    const header = props.header;
    const bytePositions = props.bytePositions;
    return (
        <tr>
            <td>{header}</td>
            {props.data.map((name, index) => {
                return (
                    <td key={index} className={assignCssClass(header, index, bytePositions)}>
                        {name}
                    </td>
                );
            })}
        </tr>
    );
}

export default ImmobRow;
