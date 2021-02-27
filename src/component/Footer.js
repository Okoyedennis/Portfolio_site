import React from "react";
import Container from "react-bootstrap/Container";
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <Container>
        <div className={style.footer__info}>
          <p>Copyright &copy; 2021.Dennis</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
