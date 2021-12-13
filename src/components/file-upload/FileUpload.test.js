import FileUpload from "./FileUpload";
import {render} from "@testing-library/react";
import user from '@testing-library/user-event';

const handleFileDecode = function(hexArray) {};

test('should disable Decode button until file selected', async() => {
    const { container, getByTestId } = render(<FileUpload />);
    expect(container.querySelector('button[type="submit"]')).toBeDisabled();

    const str = JSON.stringify({x: 1});
    const blob = new Blob(['test']);
    const file = new File([blob], 'eeprom.bin');
    const input = getByTestId('file-select');
    user.upload(input, file);
    expect(container.querySelector('button[type="submit"]')).toBeEnabled();
});
