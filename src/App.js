import React, { createRef, useState, useEffect, forwardRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Scrollspy from "react-scrollspy";

const array = [0, 1, 2, 3, 4].map((n) => `section-${n}`);

const Blog = forwardRef((props, ref) => (
  <div id="container">
    {array.map((n, i) => (
      // <Section key={i} id={n} ref={ref[i]} />
      <section id={n} ref={ref[i]} className="block">
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
    ))}
  </div>
));

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

const Header = () => (
  <header>
    <Scrollspy
      items={array}
      currentClassName="active"
      rootEl="#container"
      className="scroll-spy"
    >
      {array.map((n, i) => (
        <li key={i}>
          <a href={`#${n}`}>{n}</a>
        </li>
      ))}
    </Scrollspy>
  </header>
);

function App() {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    // add or remove refs
    setElRefs((elRefs) =>
      Array(array.length)
        .fill()
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [array.length]);
  console.log(`elRefs: `, elRefs);
  return (
    <div className="App">
      <Header />

      <Blog ref={elRefs} />
    </div>
  );
}

export default App;
