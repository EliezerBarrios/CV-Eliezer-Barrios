import "../assets/css/header.css";
import { contacts } from "../const";

const Header = () => {
  return (
    <header>
      <div>
        <h1>Eliezer Barrios</h1>
        <span className="career">
          QA Automation JR | Estudiante Ingeniería Informática
        </span>
        <div className="contacts">
          {contacts.map(({ img, content }, index) => {
            return (
              <span key={index}>
                <img src={img} /> {content}
              </span>
            );
          })}
        </div>
        <p>
          Soy un Estudiante de Ingeniería en Informática con capacidad de
          adaptación a nuevas actividades y tecnologías, apasionado de TI,
          abierto a incursionar en nuevos retos
        </p>
      </div>
    </header>
  );
};

export default Header;
