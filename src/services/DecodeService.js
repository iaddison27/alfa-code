const DecodeService = {
    bytePositions: {
        yellow: [
            [1, 11],
            [2, 1],
            [2, 7],
        ],
        green: [
            [1, 8],
            [1, 14],
            [2, 4],
        ],
        blue: [
            [1, 9],
            [1, 15],
            [2, 5],
        ],
        purple: [
            [1, 6],
            [1, 12],
            [2, 2],
        ],
        red: [
            [1, 7],
            [1, 13],
            [2, 3],
        ],
    },

    convertToHexArray: function (fileContents) {
        let hexArray = [];
        for (let i = 0; i < fileContents.length; i++) {
            let byteStr = fileContents.charCodeAt(i).toString(16);
            if (byteStr.length < 2) {
                byteStr = '0' + byteStr;
            }
            hexArray.push(byteStr);
        }
        return hexArray;
    },

    convertHexArrayTo2dArray: function (hexArray) {
        const array2d = Array.from(Array(8), () => new Array(16));
        for (let i = 0; i < 8; i++) {
            let offset = i * 16;
            for (let j = 0; j < 16; j++) {
                array2d[i][j] = hexArray[offset + j];
            }
        }
        return array2d;
    },

    checksum1: function (array2d, bytePositions, keyPosition) {
        if (array2d) {
            const yellow = this.getByteAtPositionAsInt(
                array2d,
                bytePositions,
                'yellow',
                keyPosition
            );
            const green = this.getByteAtPositionAsInt(
                array2d,
                bytePositions,
                'green',
                keyPosition
            );
            const blue = this.getByteAtPositionAsInt(
                array2d,
                bytePositions,
                'blue',
                keyPosition
            );
            const purple = this.getByteAtPositionAsInt(
                array2d,
                bytePositions,
                'purple',
                keyPosition
            );
            const red = this.getByteAtPositionAsInt(
                array2d,
                bytePositions,
                'red',
                keyPosition
            );
            return (yellow ^ green ^ blue ^ purple ^ red ^ 0x0d).toString(16);
        }
        return null;
    },

    checksum2: function (array2d, bytePositions, keyPosition) {
        if (array2d) {
            const checksum = this.checksum1(array2d, bytePositions, keyPosition);
            return (parseInt('FF', 16) - parseInt(checksum, 16)).toString(16);
        }
        return null;
    },

    getByteAtPositionAsHex: function (
        array2d,
        bytePositions,
        colour,
        keyPosition
    ) {
        const bytePositionsForColour = bytePositions[colour][keyPosition];
        return array2d[bytePositionsForColour[0]][bytePositionsForColour[1]];
    },

    getByteAtPositionAsInt: function (
        array2d,
        bytePositions,
        colour,
        keyPosition
    ) {
        return parseInt(
            this.getByteAtPositionAsHex(array2d, bytePositions, colour, keyPosition),
            16
        );
    },
};

export default DecodeService;
