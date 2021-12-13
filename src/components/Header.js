import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Alfa Romeo CODE Decoder</h1>
                <p>
                    This utility allows you to upload and decode an eeprom file from the
                    60622718 immobilizer on some Fiat/Alfa Romeo/Iveco cars.
                </p>
                <p>
                    Click "Choose file" below and select the 128bit eeprom file. Once it
                    has been uploaded, click "Decode"
                </p>
            </div>
        );
    }
}

export default Header;
