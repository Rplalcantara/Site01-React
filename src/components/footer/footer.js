import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="foot">
      <div className="iconBox">
        <Link
          to={{ pathname: "https://github.com/Rplalcantara" }}
          target="_blank"
        >
          <i className="icon3d fa fa-github fa-2x"></i>
        </Link>
        <Link
          to={{
            pathname: "https://www.linkedin.com/in/renan-alcantara/",
          }}
          target="_blank"
        >
          <i className="icon3d fa fa-linkedin fa-2x"></i>
        </Link>
        <Link
          to={{
            pathname: "https://www.facebook.com/renan.alcantara.71",
          }}
          target="_blank"
        >
          <i className="icon3d fa fa-facebook fa-2x"></i>
        </Link>
      </div>
      <span>Criado por: Renan Alcantara</span>
    </footer>
  );
}

export default Footer;
