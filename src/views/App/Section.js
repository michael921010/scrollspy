import React, { forwardRef } from "react";
import logo from "icons/logo.svg";

const Section = forwardRef(({ id }, ref) => (
  <section id={id} ref={ref} className="block">
    <img src={logo} className="logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </section>
));

export default Section;
