import React from "react";
import "../styles/About.css";

function About(props) {
  return (
    <div className="row no-gutters">
      <div className="col-md-6">
        <div className="left-side d-flex justify-content-center align-items-center p-5">
          <img
            src="https://picsum.photos/500"
            className="img-fluid h-100  w-auto shadow-lg rounded"
            alt="alt"
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="right-side d-flex flex-column justify-content-center align-items-center p-5">
          <img
            src="https://picsum.photos/200"
            alt="Avatar"
            className="avatar avatar-xl rounded-circle shadow-lg"
          />
          <h3 className="display-4 my-5">ABOUT ME</h3>
          <blockquote className="blockquote text-justify">
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. At in
              tellus integer feugiat scelerisque varius morbi enim nunc. Ut
              placerat orci nulla pellentesque dignissim enim. Volutpat maecenas
              volutpat blandit aliquam etiam erat velit scelerisque in. Sit amet
              consectetur adipiscing elit duis tristique sollicitudin nibh.
              Volutpat maecenas volutpat blandit aliquam etiam erat. Accumsan
              tortor posuere ac ut consequat semper viverra. Ultrices eros in
              cursus turpis massa. Mattis rhoncus urna neque viverra justo nec
              ultrices. Ultrices gravida dictum fusce ut placerat orci.
            </p>
            <footer className="blockquote-footer text-right my-3">Vaï</footer>
          </blockquote>
          <div className="links row small">
            <a href="/">twitter</a>
            {" - "}
            <a href="/">facebook</a>
            {" - "}
            <a href="/">instagram</a>
            {" - "}
            <a href="/">pinterest</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
