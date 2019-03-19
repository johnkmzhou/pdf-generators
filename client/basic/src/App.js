import React, { Component } from 'react';
import './App.css';

class App extends Component {

  savePdf = () => {
    fetch('/pdf')
    .then(res => res.blob())
    .then(blob => {console.log("blob", blob);  return URL.createObjectURL(blob)})
    .then(url => {
      const element = document.createElement("a");
      document.body.appendChild(element);
      element.style = "display: none";
      element.href = url;
      element.download = "test.pdf";
      element.click();
      document.body.removeChild(element);
      URL.revokeObjectURL(url);
    });
  };

  render() {
    // https://github.com/facebook/create-react-app/issues/6031
    return (
      <div className="App">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <table>
          <tbody>
            <tr>
              <td>Cell 1</td>
              <td>Cell 2</td>
            </tr>
          </tbody>
        </table>
        <button onClick={this.savePdf}>Save as PDF</button>
        <a href="http://localhost:5000/pdf">Save as PDF</a>
      </div>
    );
  }
}

export default App;
