import Capture_2 from "./imgs/Capture-2.JPG";
import Capture_3 from "./imgs/Capture-3.JPG";
import Capture_4 from "./imgs/Capture-4.JPG";
import { GrFacebookOption } from "react-icons/gr";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export const menuItems = [
  {
    title: "Home",
    url: "home",
  },
  {
    title: "About",
    url: "about",
  },
  {
    title: "Project",
    url: "project",
  },

  {
    title: "Contact",
    url: "contact",
  },
];

export const projectFlex = [
  {
    img: Capture_2,
    alt: "medical",
    desc: "A demo Medical website built with react",
  },
  {
    img: Capture_3,
    alt: "pizza",
    desc:
      "A Pizza website built with react to know prices and varient pizza available",
  },
  {
    img: Capture_4,
    alt: "weather",
    desc: "A weather app with react to know the across different location",
  },
];

export const social = [
  {
    name: "facebook",
    url: "https://www.facebook.com/nazariy1995",
    className: <GrFacebookOption />,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/nazariydumanskyy/",
    className: <FaLinkedinIn />,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/nazdumanskyy/",
    className: <FaTwitter />,
  },
  {
    name: "github",
    url: "https://github.com/Nazariy995",
    className: <FaGithub />,
  },
];
