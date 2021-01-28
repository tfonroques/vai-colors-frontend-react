import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/Footer.css";

function Footer(props) {
  return (
    <footer className="page-footer font-small d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col-md-12 ">
          <a href="https://picsum.photos/200/300">
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              size="2x"
              className="logos"
            />
          </a>
          <a href="https://picsum.photos/200/300">
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              size="2x"
              className="logos"
            />
          </a>
          <a href="https://picsum.photos/200/300">
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              size="2x"
              className="logos"
            />
          </a>
          <a href="https://picsum.photos/200/300">
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              size="2x"
              className="logos"
            />
          </a>
          <a href="https://picsum.photos/200/300">
            <FontAwesomeIcon
              icon={["fab", "pinterest"]}
              size="2x"
              className="logos"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
