import "./App.css";

import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";

import React from "react";

function App() {
  const [screenSize, setScreenSize] = React.useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  React.useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <div className="AppContainer">
      <div className="ContentContainer">
        <div className="AboutMeContainer">
          <h1>hey 👋</h1>
          <div className="AboutMeText">
            <p>
              i'm leianne
              <br />
              a software engineer, photographer,
              <br />
              aspiring dj and lover of the worlds possibilities.
            </p>
          </div>
          <div className="AboutMeText MarginTop">
            <p>
              i'm a senior software
              <br />
              engineer @ Cityblock Health
              <br />
              and previously built things @ Twitter
            </p>
          </div>
          <p className="AboutMeText MarginTop">
            message me,{" "}
            <a className="EmailLink" href="mailto: leiannelearns@gmail.com">
              say hey
            </a>
          </p>
          <a
            className="BLMLink"
            href="https://blacklivesmatter.com/"
            target="_blank"
            rel="noreferrer"
          >
            BLM
          </a>
        </div>

        <div className="FooterContainer">
          <div className="LinksContainer">
            <div className="LinksLeft">
              <a
                href="https://github.com/leianne"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoGithub size={screenSize.width > 600 ? "3em" : "2em"} />
              </a>
              <a
                href="https://linkedin.com/in/leiannelouis/"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoLinkedin size={screenSize.width > 600 ? "3em" : "2em"} />
              </a>
              <a
                href="https://instagram.com/__leianne_"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoInstagram
                  size={screenSize.width > 600 ? "3em" : "2em"}
                />
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
