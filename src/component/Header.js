import React from "react";
// import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info container">
        {/* <canvas></canvas> */}
        <h1>web development and websites promotions</h1>
        {/* <Typed
          className="typed-text"
          strings={[
            "web design",
            "Web development",
            "Facebook Ads SMM",
            "Google Ads",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        /> */}
        <a href="#" className="btn-main-offer">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
