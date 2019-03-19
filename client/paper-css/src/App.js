import React, { Component } from 'react';
import './App.css';
import 'paper-css/paper.min.css'

class App extends Component {

  savePdf = () => {
    fetch('/pdf')
    .then(res => res.blob())
    .then(blob => {return URL.createObjectURL(blob)})
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
        <section className="sheet padding-10mm">
          {Array(4).fill(
            <article>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tincidunt gravida. Mauris euismod luctus orci quis pretium. Sed tempor porttitor justo eget dictum. Donec et erat quis ipsum commodo tempus sit amet vel ex. Nullam dictum luctus
                lorem. Fusce risus enim, lobortis ut nunc quis, iaculis scelerisque orci. Ut elit diam, gravida eget semper in, dignissim quis justo.
              </p>
              <p>
                Praesent tincidunt est sed fringilla finibus. Curabitur odio quam, condimentum non fringilla ut, dapibus vel eros. Etiam scelerisque ante at lacinia mattis. Ut nec luctus metus. Aliquam non nibh sapien. Maecenas tristique condimentum risus non pellentesque.
                Suspendisse tristique mauris non suscipit cursus. Integer egestas lacus vitae lobortis eleifend. Proin porttitor quis dolor non placerat. Duis vulputate eleifend magna, in feugiat mi lobortis sed. Curabitur lobortis rhoncus neque, sed molestie
                risus commodo molestie. Aenean consequat massa felis, in porttitor elit pretium eget. Duis nunc nunc, aliquam a ultricies quis, sodales eget lorem.
              </p>
              <p>
                Nam fringilla tellus malesuada velit eleifend, nec rhoncus ipsum fringilla. Integer eget nisi ac sapien congue pharetra id non est. Nulla egestas vitae metus vel semper. Morbi iaculis leo vitae nunc tincidunt semper. Phasellus quis semper ipsum. Morbi
                rhoncus venenatis lectus sed cursus. Duis pellentesque efficitur sem mattis molestie. Praesent semper enim viverra porttitor imperdiet. Morbi ac nulla et turpis tincidunt mattis. Phasellus interdum ipsum lectus, sed malesuada dolor vestibulum
                sit amet. Sed sit amet dui in erat porta lacinia ac ut neque. Donec ante quam, auctor in lobortis tristique, auctor a lectus. Suspendisse blandit, massa vitae iaculis rutrum, ligula risus lobortis ipsum, vel cursus justo eros eget nibh.
              </p>
              <p>
                Cras vehicula velit non nisi tincidunt, non mollis nisi luctus. Cras nec vestibulum odio. Sed mollis lorem id est faucibus, ut consectetur magna rutrum. Ut ut sagittis risus, ut porta eros. Nam consectetur metus turpis, a faucibus purus rutrum ut. Sed
                tincidunt id risus eu sollicitudin. In finibus semper nunc nec dictum.
              </p>
              <p>
                Donec ac mauris ac lorem fermentum vestibulum id in turpis. Etiam hendrerit dolor quis nulla auctor, sit amet ornare neque varius. Morbi ornare arcu a dictum porttitor. Sed vitae risus a eros lacinia mattis nec non sapien. Integer non leo lorem. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse convallis sem ligula, in tristique quam consequat a. In volutpat facilisis sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Vestibulum elementum, libero ut vulputate pretium, nibh leo ultricies magna, nec porta enim erat et erat. Morbi eu lorem neque. Aenean imperdiet erat et nisl dignissim condimentum. Cras non orci ante. Suspendisse viverra
                risus vitae sollicitudin hendrerit. Praesent rhoncus ipsum eu nisi molestie, bibendum varius risus malesuada. Ut volutpat arcu quis tortor molestie, vitae cursus lacus tempor.
              </p>
            </article>
          )}
          <table>
            <thead>
              <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
                <th>Header 4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First Line 1</td>
                <td>First Line 2</td>
                <td>First Line 3</td>
                <td>First Line 4</td>
              </tr>
              {Array(40).fill(
                <tr>
                  <td>Line 1</td>
                  <td>Line 2</td>
                  <td>Line 3</td>
                  <td>Line 4</td>
                </tr>
              )}
              <tr>
                <td>Last Line 1</td>
                <td>Last Line 2</td>
                <td>Last Line 3</td>
                <td>Last Line 4</td>
              </tr>
            </tbody>
          </table>
        </section>
        <div className="no-pdf">
          <button onClick={this.savePdf}>Save as PDF</button>
          <a href="http://localhost:5000/pdf">Save as PDF</a>
        </div>
      </div>
    );
  }
}

export default App;
