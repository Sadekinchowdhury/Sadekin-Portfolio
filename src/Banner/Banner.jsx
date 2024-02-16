import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaSkype,
} from "react-icons/fa";
import TypewriterComponent from "typewriter-effect";
import "./Banner.css";
export const Banner = () => {
  const thirdLineTextArray = [
    "<h3>Front End Developer</h3>",
    "<h3>Reactjs Developer</h3>",
    "<h3>Javascript Developer</h3>",
  ];

  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="content">
          <div className="typing-animation">
            <span>
              <p>Welcome to my World</p>
            </span>
            <h2>Hi, I am Sadekin</h2>
             <div className="developr-rol">
              <h3>I'am </h3> {" "}
             <TypewriterComponent
              options={{
                strings: thirdLineTextArray,
                autoStart: true,
                loop: 1,
                speed: 50,
                delay: 300,
                pauseFor: 500,
                cursor: null,
                startDelete: true,
              }}
            />
             </div>
              <p>
              Hard work fuels the code, turning challenges into triumphs. In the realm of ReactJS, dedication is the secret sauce for exceptional development
              </p>
            
          </div>
          <div className="social">
            <div className="social-media">
              <span>
                <a
                  title="Facebook"
                  href="https://m.facebook.com/profile.php?id=100020676828503"
                >
                  <FaFacebook />
                </a>
              </span>
              <span>
                <a
                  title="Linkdin"
                  href="https://www.linkedin.com/in/sadekinchowdhury123/"
                >
                  <FaLinkedin />
                </a>
              </span>
              <span>
                <a
                  title="Skype"
                  href="https://join.skype.com/invite/vIyvfMOb7HeK"
                >
                  <FaSkype />
                </a>
              </span>
              <span>
                <a title="Github" href="https://github.com/Sadekinchowdhury">
                  <FaGithub />
                </a>
              </span>
              <span>
                <a title="Download CV" href="">
                  <FaDownload />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-content img-container">
        <img src="./../../public/image/rume-removebg-preview.png" alt="" />
      </div>
    </div>
  );
};
