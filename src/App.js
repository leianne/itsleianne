import "./App.css";

import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";

function App() {
  return (
    <div className="AppContainer">
      <div className="LeftBorder" />
      <div className="Circle"></div>
      <div className="TopBorder" />
      <div className="ContentContainer">
        <div className="AboutMeContainer">
          <h1>hello 👋</h1>
          <div className="AboutMeText">
            <p>my name is leianne</p>
            <p>i'm a software engineer, photographer,</p>
            <p>lover of tech and all possibilities.</p>
          </div>
          <div className="AboutMeText MarginTop">
            <p>i am currently a</p>
            <p>senior software engineer @ Cityblock Health</p>
            <p>and previously built things @ Twitter</p>
          </div>
          <p className="AboutMeText MarginTop">
            don't be shy, <a className="EmailLink">say hi</a>
          </p>
        </div>
        <div className="FooterContainer">
          <a
            className="BLMLink"
            href="https://blacklivesmatter.com/"
            target="_blank"
            rel="noreferrer"
          >
            BLM
          </a>
          <div className="Border" />
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
          <div className="Border" />
        </div>
      </div>

      <div className="CornerBorder" />
    </div>
  );
}

export default App;
