import React, { Component } from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

import './App.css';
import Doc from './Doc';

class App extends Component {

  render() {
    return (
      <div className="App">
        <PDFViewer height="100%" width="100%">
          <Doc />
        </PDFViewer>
        <PDFDownloadLink className="button" document={ <Doc /> } fileName="doc.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      </div>
    );
  }
}

export default App;
