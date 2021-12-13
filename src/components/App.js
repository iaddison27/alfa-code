import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Header from './Header.js';
import FileUpload from './file-upload/FileUpload.js';
import Grid from './grid/Grid.js';
import Keys from './keys/Keys.js';
import DecodeService from '../services/DecodeService.js';
import Array2dContext from "../context/array-2d-context";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        array2d: null,
        bytePositions: DecodeService.bytePositions,
        selectedFile: null,
    };
    this.handleFileDecode = this.handleFileDecode.bind(this);
  }

  handleFileDecode(hexArray) {
    this.setState({ array2d: DecodeService.convertHexArrayTo2dArray(hexArray) });
    this.props.history.replace('/decode');
  }

  render() {
    return (
        <div>
          <Header />
          <Array2dContext.Provider value={this.state.array2d}>
              <FileUpload onFileDecode={this.handleFileDecode} />
              <Route path={`/decode`}>
                  <Grid bytePositions={this.state.bytePositions} />
                  <Keys bytePositions={this.state.bytePositions}/>
              </Route>
          </Array2dContext.Provider>
        </div>
    );
  }
}

export default withRouter(App);
