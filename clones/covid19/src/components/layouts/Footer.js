import React from "react";

const Footer = () => {
  const time = new Date();

  return (
    <footer>
      <div className="info">
        <h1>Corona Virus Online Statistics </h1>
        <p>All Rights Reserved @ {time.getFullYear()}</p>
      </div>
      <div className="author">
        <div className="info" style={{ paddingBottom: "6px" }}>
          <h1>
            By Wendel de Lima - Full Stack Developer
          </h1>
        </div>
        <ul>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/wendel-de-lima-74b6b01a1/"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/wendellima94"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
