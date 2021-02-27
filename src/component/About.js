import React from "react";
import Container from "react-bootstrap/Container";
import style from "./Style/About.module.css";
import About__skills from "./About__skills";

function About() {
  return (
    <div className={style.about} id="about">
      <Container>
        <div className={style.about__flex}>
          <div className={style.about__right}>
            <div className={style.aboutRight__info}>
              <span>HELLO,</span>
              <h4 className={style.h4}>I'M OKOYE DENNIS</h4>
              <hr />
              <p>
                I am a passionate and meticulous software developer who has a
                flair for UI design. I enjoy taking complex problem and turning
                them into sleek, beautiful and simple user interfaces. Every day
                in this field is an adventure and it continues to marvel me how
                a good font, color choice and few lines of code turn bland into
                brilliant.
              </p>

              <p>
                I enjoy the process of creation and constantly learning better
                ways of doing things everyday. Currently on the journey to
                becoming a full stack Developer where I can work with more
                technologies and carry on more projects. My objective is to
                provide absolutely accurate services to my clients.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <About__skills />
    </div>
  );
}

export default About;
