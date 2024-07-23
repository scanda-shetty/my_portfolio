import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skill">My Expertise</h2>
      </div>
      <div className="skills1">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skillsCard">
            <div className="skillsImg">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skillsContent">
              <h3 className="skillsTitle">{item.title}</h3>
              <p className="skillsDesc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
