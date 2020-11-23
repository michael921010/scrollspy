import React, { useState, useEffect } from "react";
import { Scrollspy } from "components";
import { pluck } from "ramda";
import { hasData } from "utils";
import { array } from "./";

const Header = (props) => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const elements = pluck("current")(props.refs);
    if (hasData(elements)) {
      setElements(elements);
    }
  }, [props.refs]);

  return (
    <header>
      <Scrollspy
        // items={array}
        elements={elements}
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
};

export default Header;
