import React from "react";
import style from "./Style/Contact.module.css";
import Container from "react-bootstrap/Container";
import emailjs from "emailjs-com";
import { GrFacebookOption } from "react-icons/gr";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s33q0nk",
        "template_rbmn01i",
        e.target,
        "user_F1KvHoYXiTu1HRN9fVl8g"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("FAILED!" + error);
        }
      );
    e.target.reset();
  }
  return (
    <div className={style.contact} id="contact">
      <Container>
        <div className={style.contact__header}>
          <h5>Contact us</h5>

          <div className={style.social__links}>
            <a href="">
              <span>
                <GrFacebookOption className={style.icon} />
              </span>
            </a>
            <a href="https://twitter.com/OkoyeDennis07" target="_blank">
              <span>
                <FaTwitter className={style.icon} />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/dennis-okoye-9b00b71b0/"
              target="_blank"
            >
              <span>
                <FaLinkedinIn className={style.icon} />
              </span>
            </a>
            <a href="https://github.com/Okoyedennis" target="_blank">
              <span>
                <FaGithub className={style.icon} />
              </span>
            </a>
          </div>
        </div>

        <div className={style.contact__info}>
          <form onSubmit={sendEmail}>
            <div className={style.form__info}>
              <input type="text" placeholder="Name:" required name="name" />
              <input
                type="text"
                placeholder="Subject:"
                name="subject"
                required
              />
              <input type="email" placeholder="Email:" name="email" required />
              <textarea
                required
                name="message"
                placeholder="Message:"
                cols="30"
                rows="10"
                type="message"
              ></textarea>
              <button className={style.primary} type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
