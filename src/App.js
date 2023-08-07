import "./App.css";

import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";

function App() {
  return (
    <div className="AppContainer">
      <div className="TopBorder" />
      <div className="Circle" />
      <div className="ContentContainer">
        <div className="AboutMeContainer">
          <h1>hello 👋</h1>
          <div className="AboutMeText">
            <p>my name is leianne</p>
            <p>i'm a software engineer, photographer,</p>
            <p>aspiring dj and lover of the worlds possibilities.</p>
          </div>
          <div className="AboutMeText MarginTop">
            <p>i am currently a</p>
            <p>senior software engineer @ Cityblock Health</p>
            <p>and previously built things @ Twitter</p>
          </div>
          <p className="AboutMeText MarginTop">
            don't be shy,
            <a className="EmailLink" href="mailto: leiannelearns@gmail.com">
              say hi
            </a>
          </p>
        </div>
        <a
          className="BLMLink"
          href="https://blacklivesmatter.com/"
          target="_blank"
          rel="noreferrer"
        >
          BLM
        </a>
        <div className="FooterContainer">
          <div className="LinksContainer">
            <div className="LinksLeft">
              <a
                href="https://github.com/leianne"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoGithub size="3em" />
              </a>
              <a
                href="https://linkedin.com/in/leiannelouis/"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoLinkedin size="3em" />
              </a>
              <a
                href="https://instagram.com/__leianne_"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoInstagram size="3em" />
              </a>
            </div>
            <a
              className="PhotoLink"
              href="https://leiannes.photos"
              rel="noreferrer"
              target="_blank"
            >
              leiannes.photos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
