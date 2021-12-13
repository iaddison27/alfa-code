import DecodeService from "./DecodeService";

test('should convert string to 1D hex array', () => {
    expect(DecodeService.convertToHexArray('a test')).toEqual(['61', '20', '74', '65', '73', '74']);
});

test('should convert 1D hex array to 2D hex array', () => {
    const oneDimensionalHexArray = Array.apply(null, Array(128)).map(function (x, i) { return i; });

    expect(DecodeService.convertHexArrayTo2dArray(oneDimensionalHexArray)).toEqual([
        Array.apply(null, Array(16)).map(function (x, i) { return i; }),
        Array.apply(null, Array(16)).map(function (x, i) { return 16 + i; }),
        Array.apply(null, Array(16)).map(function (x, i) { return 32 + i; }),
        Array.apply(null, Array(16)).map(function (x, i) { return 48 + i; }),
        Array.apply(null, Array(16)).map(function (x, i) { return 64 + i; }),
        Array.apply(null, Array(16)).map(function (x, i) { return 80 + i; }),
        Array.apply(null, Array(16)).map(function (x, i) { return 96 + i; }),
        Array.apply(null, Array(16)).map(function (x, i) { return 112 + i; }),
    ]);
});

test('should calculate checksum 1 correctly', () => {
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

    expect(DecodeService.checksum1([['ff', 'ae', 'f1', 'e6', 'ce']], bytePositions, 0)).toBe('85');
});

test('should calculate checksum 2 correctly', () => {
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

    expect(DecodeService.checksum2([['ff', 'ae', 'f1', 'e6', 'ce']], bytePositions, 0)).toBe('7a');
});

test('getByteAtPositionAsHex should return the hex value', () => {
    const bytePositions = {
        red: [
            [0, 1]
        ],
    };
    expect(DecodeService.getByteAtPositionAsHex([['ff', 'ae', 'f1', 'e6', 'ce']], bytePositions, 'red', 0)).toBe('ae');
});

test('getByteAtPositionAsInt should return the int value', () => {
    const bytePositions = {
        red: [
            [0, 1]
        ],
    };
    expect(DecodeService.getByteAtPositionAsInt([['ff', 'ae', 'f1', 'e6', 'ce']], bytePositions, 'red', 0)).toBe(174);
});
