import Container from "react-bootstrap/Container";
import React from "react";
import style from "./Style/Home.module.css";
import { social } from "./MenuItems";

function Home() {
  return (
    <div id="home" className={style.home}>
      <Container>
        <div className={style.home__info}>
          <h1>I'm Okoye Dennis</h1>
          <h3>I'm a Lagos Based Frontend Developer</h3>
          <hr />
        </div>
      </Container>
    </div>
  );
}

export default Home;
