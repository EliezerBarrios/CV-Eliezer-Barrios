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
    name: 'Certificado "Everyday english program - nivel 7" de 10',
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
  {
    date: 2023,
    place: "",
    name: "Capacitación como QA Automation",
  },
];

const workExperience = [
  {
    date: "Marzo 2023 - Julio 2023",
    job: "QA Manual JR",
    jobDescription:
      "Aplicaciones Móviles. Aplicaciones Web. Diseño de casos. Manejo de equipos de testing",
  },
  {
    date: "Julio 2023 - Actualidad",
    job: "QA Automation JR",
    jobDescription:
      "Automatización WebApps. Diseño de Casos para Automatización. Automatización MobileApp Testing con Cucumber+Gherkin+Java y Katalon Studio.",
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
  dev: ["HTML+CSS", "MySQL", "Java", "Laravel"],
  qa: [
    "Trello",
    "Cucumber + Gherkin + Java",
    "Cypress",
    "Katalon Studio",
    "Selenium",
    "Integración continua de pruebas Web",
  ],
};

export { contacts, trainings, workExperience, technologies, softSkills };
