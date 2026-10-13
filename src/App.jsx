import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Main } from "./components/Main/Main";
import { About } from "./components/About/About";
import { Partners } from "./components/Partners/Partners";
import { Lectors } from "./components/Lectors/Lectors";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <Nav />
        </div>
      </header>
      <main className="container page">
        <div id="home" className="anchor">
          <Main />
        </div>
        <div id="about" className="anchor">
          <About />
        </div>
        <div id="partners" className="anchor">
          <Partners />
        </div>
        <div id="lectors" className="anchor">
          <Lectors />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;