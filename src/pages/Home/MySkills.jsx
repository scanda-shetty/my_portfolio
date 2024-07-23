export default function MySkills() {
  return (
    <section className="skills" id="mySkills">
      {/* Skills Heading */}
      <div className="skillsHeader">
        <p className="section--title" style={{paddingLeft:'35px'}}>My Skills</p>
      </div>

      {/* Skills Sections */}
      <div className="skillsContainer">
        <div className="skills1">
          <div className="skillsCard">
            <div className="skillsImg">
              <img src="./img/java.png" alt="Product Chain" />
            </div>
            <div className="skillsContent">
              <h3 className="skillsTitle">Languages</h3>
              <img src="./img/c.svg" alt="C" />
              <img src="./img/c++.svg" alt="C++" />
              <img src="./img/python.svg" alt="Python" />
            </div>
          </div>
        </div>

        <div className="skills1">
          <div className="skillsCard">
            <div className="skillsImg">
              <img src="./img/webdev.png" alt="Product Chain" />
            </div>
            <div className="skillsContent">
              <h3 className="skillsTitle">Web-Dev</h3>
              <img src="./img/html5.svg" alt="HTML5" />
              <img src="./img/css3.svg" alt="CSS3" />
              <img src="./img/javascript.svg" alt="JavaScript" />
              <img src="./img/react.svg" alt="React" />
              <img src="./img/express.svg" alt="Express" />
              <img src="./img/nodejs.svg" alt="Node.js" />
              <img src="./img/flask.svg" alt="Flask" />
            </div>
          </div>
        </div>

        <div className="skills1">
          <div className="skillsCard">
            <div className="skillsImg">
              <img src="./img/blockchain.png" alt="Product Chain" />
            </div>
            <div className="skillsContent">
              <h3 className="skillsTitle">Blockchain</h3>
              <img src="./img/solidity-icon.svg" alt="Solidity" />
              <img src="./img/hardhat.svg" alt="Hardhat" />
              <img src="./img/ethereum.svg" alt="Ethereum" />
              <img src="./img/meta.svg" alt="MetaMask" />
            </div>
          </div>
        </div>

        <div className="skills1">
          <div className="skillsCard">
            <div className="skillsImg">
              <img src="./img/tools.png" alt="Product Chain" />
            </div>
            <div className="skillsContent">
              <h3 className="skillsTitle">Tools</h3>
              <img src="./img/github.svg" alt="GitHub" />
              <img src="./img/linux.svg" alt="Linux" />
              <img src="./img/aws.svg" alt="AWS" />
              <img src="./img/bootstrap.svg" alt="Bootstrap" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
