import "../assets/css/body.css";
import { softSkills, technologies, trainings, workExperience } from "../const";

const Section = (props) => {
  return (
    <div className="section">
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </div>
  );
};

const Body = () => {
  return (
    <main>
      <div>
        <Section title={"Carrera"}>
          <div className="career">
            <h3 className="career__title">INGENIERÍA INFORMÁTICA</h3>
            <p className="career__place">
              Universidad Nacional Experimental de Guayana
            </p>
            <span className="career__time">2019 - Actualidad</span>
            <p className="career__now" style={{ color: "#888" }}>
              Cursando 9no semestre en la actualidad
            </p>
          </div>
        </Section>
        <Section title={"Habilidades blandas"}>
          <ul className="soft-skills">
            {softSkills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
        <Section title={"Tecnologías"}>
          <div className="technologies">
            <div>
              <h3>QA</h3>
              <ul>
                {technologies.qa.map((item) => {
                  return <li key={item}>{item}</li>;
                })}
              </ul>
            </div>
            <div>
              <h3>Develop</h3>
              <ul>
                {technologies.dev.map((item) => {
                  return <li key={item}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        </Section>
        <Section title={"Experiencia laboral"}>
          <ul className="work-experience">
            {workExperience.map(({ date, job, jobDescription }, index) => {
              return (
                <li key={index}>
                  <span>{date}</span>
                  <div>
                    <h3>{job}</h3>
                    <span>{jobDescription}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </Section>
        <Section title={"Capacitaciones"}>
          <ul className="trainings">
            {trainings.map(({ date, place, name }, index) => {
              return (
                <li key={index}>
                  <div>
                    <span>{date}</span>
                    <p>{place}</p>
                  </div>
                  <h3>{name}</h3>
                </li>
              );
            })}
          </ul>
        </Section>
      </div>
    </main>
  );
};

export default Body;
