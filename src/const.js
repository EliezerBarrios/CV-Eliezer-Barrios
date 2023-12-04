import ImgPhone from "./assets/img/smartphone.svg";
import ImgMail from "./assets/img/mail.svg";

const contacts = [
  { img: ImgPhone, content: "+58 424-9286540" },
  { img: ImgMail, content: "eliezer.barrios01@gmail.com" },
];

const softSkills = [
  "Facilidad para aprender",
  "Problem Solving",
  "Dominio inglés conversacional y escrito intermedio-alto",
  "Responsable",
  "Adaptable a Nuevas Tecnologías",
  "Atención a los detalles",
  "Trabajo en equipo",
];

const trainings = [
  {
    date: 2019,
    place: "Universidad Católica Andrés Bello",
    name: 'Certificado "Everyday english program - intermediate 4"',
  },
  {
    date: 2018,
    place: "INCES",
    name: "Certificado organización y administración del trabajo",
  },
  {
    date: 2018,
    place: "INCES",
    name: "Certificado de seguridad industrial y ambiente de trabajo",
  },
];

const workExperience = [
  {
    date: "Marzo 2023 - Mayo2023",
    job: "QA Manual JR",
    jobDescription:
      "Aplicaciones Móviles, Aplicaciones Web, Manejo de grupo de equipos de testing",
  },
  {
    date: "Mayo 2023 - Actualidad",
    job: "QA Automation JR",
    jobDescription:
      "Automatización MobileApp Testing con Cucumber+Gherkin+Java y Katalon Studio. Automatización WebApps con Cypress",
  },
];
/*
const technologies = [

  "Cucumber+Gherkin",
  "Java",
  "Cypress",
  "Katalon Studio",
  "Selenium IDE",
  "HTML+CSS",
  "MySQL",
  "React",
  "Laravel",
  "",
];*/
const technologies = {
  dev: ["HTML+CSS", "MySQL", "React", "Laravel"],
  qa: [
    "Cucumber + Gherkin + Java",
    "Cypress",
    "Katalon Studio",
    "Selenium IDE",
    "Trello",
  ],
};

export { contacts, trainings, workExperience, technologies, softSkills };
