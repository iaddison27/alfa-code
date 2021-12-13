import { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Header from './Header.js';
import FileUpload from './file-upload/FileUpload.js';
import Grid from './grid/Grid.js';
import Keys from './keys/Keys.js';
import DecodeService from '../services/DecodeService.js';
import Array2dContext from "../context/array-2d-context";

function App(props) {
  const [array2d, setArray2d] = useState(Array.from(Array(8), () => new Array(16)));

  const handleFileDecode = (hexArray) => {
    setArray2d(DecodeService.convertHexArrayTo2dArray(hexArray));
    props.history.replace('/decode');
  }

  return (
        <div>
          <Header />
          <Array2dContext.Provider value={array2d}>
              <FileUpload onFileDecode={handleFileDecode} />
              <Route path={`/decode`}>
                  <Grid bytePositions={DecodeService.bytePositions} />
                  <Keys bytePositions={DecodeService.bytePositions}/>
              </Route>
          </Array2dContext.Provider>
        </div>
    );
}

export default withRouter(App);
