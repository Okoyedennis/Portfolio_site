import React from "react";
import style from "./Style/About.module.css";
import {
  FaHtml5,
  FaBootstrap,
  FaCss3,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiJavascript, SiMaterialUi } from "react-icons/si";
import Container from "react-bootstrap/Container";

const About__skills = () => {
  return (
    <div className={style.about__skills}>
      <div className={style.project__title}>
        <h5>My skill</h5>
      </div>
      <Container>
        <div className={style.flex}>
          <div className={style.card}>
            <FaHtml5 className={style.icon__html} />
            <h4>HTML</h4>
          </div>
          <div className={style.card}>
            <FaCss3 className={style.icon__css} />
            <h4>CSS</h4>
          </div>
          <div className={style.card}>
            <SiJavascript className={style.icon__javascript} />
            <h4>Javascript</h4>
          </div>
          <div className={style.card}>
            <FaReact className={style.icon__react} />
            <h4>React</h4>
          </div>
          <div className={style.card}>
            <FaBootstrap className={style.icon__bootstrap} />
            <h4>Bootstrap</h4>
          </div>
          <div className={style.card}>
            <FaGithub className={style.icon__github} />
            <h4>Github</h4>
          </div>
          <div className={style.card}>
            <SiMaterialUi className={style.icon__materialUI} />
            <h4>MaterialUi</h4>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About__skills;
