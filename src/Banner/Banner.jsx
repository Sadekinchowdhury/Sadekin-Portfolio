import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaSkype } from "react-icons/fa";
import TypewriterComponent from "typewriter-effect";
import Container from "../Container/Container";
import "./Banner.css";
export const Banner = () => {
  const firstLineTextArray = ["<span>Welcome to my World</span>"];
  // Text for the second line with HTML tags
  const secondLineTextArray = ["<h2>Hi, I am Sadekin</h2>"];
  // Text for the second line with HTML tags
  const thirdLineTextArray = [
    "<h3>Front End Developer</h3>",
    "<h3>JavaScript, React.js</h3>",
    "<h3>Node.js, MongoDB</h3>",
    "<h3>Vanilla CSS, Tailwind CSS</h3>",
  ];

  return (
    <Container>
      <div className="banner-container ">
        <div className="banner">
          <div className="sadek-banner">
            <div className="banner-content">
            <div className="typing-animation">
            <TypewriterComponent
                options={{
                  strings: firstLineTextArray,
                  autoStart: true,
                  loop: true,
                  speed: 10,
                  delay: 20,
                  pauseFor: 4000,
                  cursor: null,
                }}
              />
              <TypewriterComponent
                options={{
                  strings: secondLineTextArray,
                  autoStart: true,
                  loop: true,
                  speed: 50,
                  delay: 50,
                  pauseFor: 10000,
                  cursor: null,
                }}
              />
              <TypewriterComponent
                options={{
                  strings: thirdLineTextArray,
                  autoStart: true,
                  loop: true,
                  speed: 50,
                  delay: 10,
                  pauseFor: 500,
                  cursor: null,
                }}
              />
            </div>
              <div className="social-media">
                <span>
                  <a title="Facebook" href="https://m.facebook.com/profile.php?id=100020676828503"><FaFacebook /></a>
                </span>
                <span>
                 <a title="Linkdin" href="https://www.linkedin.com/in/sadekinchowdhury123/"><FaLinkedin /></a> 
                </span>
                <span>
                  <a title="Skype" href="https://join.skype.com/invite/vIyvfMOb7HeK"><FaSkype /></a>
                </span>
                <span>
                  <a title="Github" href="https://github.com/Sadekinchowdhury"><FaGithub /></a>
                </span>
                <span>
                  <a title="Download CV" href=""><FaDownload/></a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
