import React from 'react';

const Array2dContext = React.createContext({
   array2d: Array.from(Array(8), () => new Array(16)),
});

export default Array2dContext;
