import React from "react";
import style from "./Style/Project.module.css";
import Container from "react-bootstrap/Container";
import Capture_2 from "./imgs/Capture-2.JPG";
import Capture_3 from "./imgs/Capture-3.JPG";
import Capture_4 from "./imgs/Capture-4.JPG";
import covid from "./imgs/covid-19_tracker.JPG";

function Project() {
  return (
    <div className={style.project} id="project">
      <Container>
        <div className={style.project__title}>
          <h5>SOME OF MY WORK</h5>
        </div>
        <div className={style.project__info}>
          <div className={style.project__infoLeft}>
            <a href="" target="_blank">
              <img src={Capture_2} className={style.img1} alt="medical" />
            </a>
            <div className={style.project__appInfo}>
              <h3>MediLab</h3>
              <p>
                This is a hospital demo website i built with
                <strong> React.js</strong>, <strong>Bootstrap</strong>. i built
                for a code challenge given to me.
              </p>
            </div>
          </div>
          <div className={style.project__infoMiddle}>
            <a href="" target="_blank">
              <img src={Capture_3} className={style.img2} alt="pizza" />
            </a>
          </div>
          <div className={style.project__infoRight}>
            <a href="" target="_blank">
              <img src={Capture_4} className={style.img2} alt="weather" />
            </a>
            <div className={style.project__appInfo}>
              <h3>Wheather app</h3>
              <p>
                This is a weather app i built with <strong>React.js</strong>. It
                will ask for your location and it will get the weather for the
                current location and also for the location you want to search.
              </p>
            </div>
          </div>
        </div>
        <div className={style.project__info}>
          <div className={style.project__infoLeft}>
            <a href="" target="_blank">
              <img src={covid} className={style.img1} alt="medical" />
            </a>
            <div className={style.project__appInfo}>
              <h3>Covid-19 Tracker</h3>
              <p>
                This is a covid-19 tracker app i built with{" "}
                <strong>React.js</strong>. It can show the amount covid-19
                Infection, Recovered and Death globally and can also search
                country by country.
              </p>
            </div>
          </div>
          <div className={style.project__infoMiddle}>
            <a href="" target="_blank">
              <img src={Capture_3} className={style.img2} alt="pizza" />
            </a>
          </div>
          <div className={style.project__infoRight}>
            <a href="" target="_blank">
              <img src={Capture_4} className={style.img2} alt="weather" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Project;
