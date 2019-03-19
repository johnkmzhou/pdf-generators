import React, { Component } from 'react';
import './App.css';
import 'paper-css/paper.min.css';

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
          <section class="sheet padding-10mm">
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
              <p>
                Duis condimentum neque ut tortor consequat porta. Nullam ut nulla quam. Donec eleifend vehicula dui quis facilisis. Phasellus mi leo, auctor vel efficitur nec, semper et tellus. Duis condimentum ligula at ligula pellentesque tincidunt. Vivamus vestibulum
                elit quis maximus tristique. Donec malesuada porttitor nisi. Sed aliquet, lorem vitae porta dictum, diam enim cursus est, et tempor est nibh ac massa. Maecenas mattis accumsan venenatis. Quisque sit amet erat ex. Phasellus sit amet cursus justo.
              </p>
              <p>
                Donec volutpat interdum ultricies. Ut vitae justo at sem pellentesque consequat. Integer ac libero ac nibh consequat finibus tincidunt id mi. Vestibulum mattis, neque vitae laoreet dignissim, magna lectus eleifend ex, quis imperdiet sem leo ut nisl. Etiam
                non ipsum interdum, molestie ipsum eget, sagittis urna. Mauris non lectus porta, convallis eros nec, auctor nisi. Ut lacinia malesuada lorem id pulvinar.
              </p>
              <p>
                Nullam mollis, leo nec pulvinar fermentum, diam orci imperdiet dolor, nec dignissim justo nibh eget quam. Nulla congue magna sit amet dolor vulputate, a pharetra sapien hendrerit. Proin sed vehicula lorem. Pellentesque sit amet posuere arcu. In elementum
                libero nec libero commodo, id ultrices sem sollicitudin. In hac habitasse platea dictumst. Donec vel feugiat felis. Mauris vitae tellus et nulla aliquam commodo quis in lacus.
              </p>
              <p>
                Nam accumsan tellus sem, eu pharetra urna fermentum non. Nullam quis odio magna. Proin sed tortor justo. Vestibulum finibus eget ipsum tincidunt congue. Sed in ullamcorper libero, ut faucibus eros. Etiam eget purus vitae ante vulputate mattis at a nisl.
                Quisque ultricies arcu ligula, ut pharetra massa imperdiet id. Nulla elementum, justo et maximus fermentum, leo mi elementum eros, nec blandit sapien sem quis mi. Phasellus ut dictum diam. Mauris lacinia risus sit amet tortor pharetra vehicula.
                Cras et odio eu lectus convallis mattis in at turpis.
              </p>
              <p>
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer a feugiat magna, vehicula fringilla magna. Quisque vitae vulputate erat. Fusce vestibulum bibendum metus, in sodales sem tincidunt id. Integer elit lectus, pretium bibendum molestie
                in, tempus et massa. Suspendisse pretium quam ut tristique iaculis. Sed varius mauris ac ante vulputate, in rhoncus neque vehicula. Proin sed justo justo. Proin maximus vestibulum lorem quis pharetra. Curabitur quam lacus, vestibulum sit amet
                turpis eget, tincidunt tristique enim. Nulla sed enim consectetur dolor tempor commodo.
              </p>
              <p>
                Quisque ut elit enim. Integer dolor urna, fermentum ac sapien vitae, pulvinar feugiat velit. Suspendisse molestie turpis sem, in tristique nulla vulputate eu. Nulla eget ex at sapien fringilla vehicula. Proin elementum nisi nec elit dapibus, a dictum
                dolor hendrerit. Proin semper viverra ipsum, quis feugiat leo ullamcorper quis. Nam est justo, interdum vel egestas nec, fermentum at felis. Aenean mattis ultricies nisl, vel feugiat tortor suscipit eget. Morbi vel sodales eros. Sed in purus lectus.
                Duis vestibulum dictum lectus, quis suscipit turpis semper vel. Curabitur viverra leo erat, sit amet placerat justo porta nec. Praesent ut erat sodales, malesuada mauris a, porta arcu.
              </p>
              <p>
                Vestibulum consequat odio id commodo accumsan. Nullam quis tellus sem. Phasellus et placerat diam. Curabitur dignissim metus nec ligula ultricies, at tempus ligula mollis. Nam suscipit tortor sed orci suscipit congue. In rhoncus aliquet leo, in pharetra
                metus tincidunt et. Aliquam vel sem nec magna pretium suscipit. Vestibulum quam erat, vulputate vitae porta in, interdum in diam. Sed aliquam erat ac justo sollicitudin pretium. Duis posuere cursus leo, ut dapibus elit sollicitudin quis.
              </p>
              <p>
                Ut bibendum odio nunc, quis dictum nunc elementum non. Pellentesque nec dui sagittis, gravida neque sed, tristique lectus. In euismod quis metus at consectetur. Aliquam erat volutpat. Maecenas dictum at sapien vitae posuere. Donec consectetur a enim nec
                vulputate. Praesent quis lacinia leo. Aliquam finibus et quam interdum hendrerit. Donec auctor volutpat risus, at gravida lacus fermentum nec. Nulla molestie nunc quis fermentum malesuada. Phasellus porttitor eleifend feugiat. Nulla in vulputate
                eros. Nulla bibendum rhoncus augue id porta.
              </p>
              <p>
                Pellentesque semper justo sed eros pulvinar auctor. Fusce condimentum sapien ac commodo faucibus. Sed eleifend magna vel nisl aliquam, sed vulputate purus pretium. Donec finibus vel leo sit amet sollicitudin. Nulla egestas malesuada lacinia. Mauris in
                porta libero. Mauris vitae nibh pulvinar, gravida dolor sed, maximus turpis. Donec cursus nisl ac sem gravida, ac cursus nibh rhoncus. Ut dignissim magna mi, feugiat blandit libero sollicitudin et. Donec et facilisis dolor, varius consequat mauris.
                Nam ac tincidunt magna. Etiam congue, tellus ac iaculis lobortis, quam neque pulvinar tellus, et fermentum eros magna a augue.
              </p>
              <p>
                Suspendisse vel gravida arcu. Aliquam molestie lobortis orci et sollicitudin. Sed eu erat quis tortor tincidunt pellentesque. Nulla ac nisl nec purus tristique ultricies eu eu ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque
                rutrum tempus mi sed aliquam. Nulla in lorem quis eros accumsan viverra.
              </p>
              <p>
                Aliquam mollis dolor tortor, sed lacinia nisl eleifend a. Aliquam feugiat mi mauris, pretium semper ligula suscipit sed. Pellentesque quis egestas velit. Donec in dictum turpis. Donec id rutrum felis. Ut a justo imperdiet, tempor nibh eu, bibendum massa.
                Aliquam non ante nec lacus semper ornare. Pellentesque euismod nisl non purus condimentum, non consectetur quam rutrum. Mauris vel leo a orci pretium ullamcorper quis in nunc. Integer ac pellentesque nunc. Donec dolor felis, maximus nec mattis
                a, elementum eu ligula. Aliquam pharetra rhoncus rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p>
                Suspendisse mauris ante, aliquam et justo eu, volutpat hendrerit nulla. Mauris vel metus convallis, pretium est non, dictum felis. Morbi libero magna, tempus ac feugiat quis, ullamcorper ut eros. Donec pellentesque ultricies sem, at posuere elit luctus
                eget. Proin rhoncus et ipsum vel euismod. Ut finibus laoreet velit, eu auctor erat scelerisque nec. Cras est lacus, molestie nec faucibus vitae, imperdiet nec lectus. Sed metus magna, mollis non malesuada vel, placerat eget ante. Vivamus non auctor
                ante, nec facilisis quam.
              </p>
              <p>
                Ut scelerisque laoreet lorem vel semper. Duis laoreet iaculis arcu eget sagittis. Nullam ut eros vel erat imperdiet vestibulum. Proin eu quam commodo, pulvinar justo et, pretium nulla. Pellentesque enim ipsum, dignissim nec mauris non, suscipit laoreet
                quam. Praesent euismod elit sit amet purus mattis, sit amet facilisis elit dictum. Donec at sodales sapien. Duis cursus tellus tortor, vitae rutrum ipsum facilisis nec. Aliquam et sem et massa accumsan porta nec eu risus. Donec blandit non risus
                aliquet malesuada. Vivamus eu ex posuere, tincidunt magna in, tempor sem. Aenean scelerisque, elit at sodales ullamcorper, tellus nisi condimentum turpis, in consectetur est urna quis ex. Nunc bibendum rhoncus tempor. Integer cursus, nulla a pretium
                euismod, erat lacus sollicitudin libero, condimentum ornare lectus ipsum in purus.
              </p>
              <p>
                Vestibulum at nulla nibh. Ut odio mauris, varius gravida efficitur vitae, tincidunt et tortor. Suspendisse a mattis felis. Vestibulum luctus orci sed rhoncus lacinia. Duis malesuada, odio non gravida imperdiet, nisi libero efficitur quam, quis aliquam
                magna metus a orci. Nulla hendrerit purus eget ligula hendrerit, et pharetra tellus bibendum. Sed scelerisque ligula id euismod condimentum. Cras faucibus aliquet elementum. Suspendisse et molestie nulla, ut scelerisque purus. Duis interdum maximus
                arcu, eu bibendum ipsum hendrerit ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc dapibus, nulla sed semper accumsan, dui metus consequat ante, iaculis feugiat ligula nulla a eros.
              </p>
              <p>
                In semper ultricies urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dignissim ipsum et mauris tempus tempus. Nunc interdum pellentesque quam elementum ornare. Mauris scelerisque eros felis. Donec molestie
                nisl ultrices, maximus nunc suscipit, sodales purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tempor et ex sed hendrerit. Praesent aliquam ipsum velit, ac tincidunt metus venenatis vel. Maecenas molestie eu sem blandit
                maximus. Proin ut magna blandit, dictum mi in, elementum orci. Integer luctus, lorem ac gravida auctor, ligula metus ullamcorper risus, id elementum elit neque ut diam. Curabitur dapibus risus a commodo auctor. Pellentesque lobortis feugiat mi,
                non tempus massa cursus at. Sed faucibus eu lacus egestas iaculis. Etiam odio nulla, viverra non enim in, suscipit ultrices ex.
              </p>
            </article>
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
                {Array(10).fill(
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
        <button onClick={this.savePdf}>Save as PDF</button>
        <a href="http://localhost:5000/pdf">Save as PDF</a>
      </div>
    );
  }
}

export default App;
