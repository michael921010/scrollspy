import React, { createRef, useState, useEffect } from "react";
import "styles/App.css";
import Header from "./Header";
import Blog from "./Blog";

export const array = [0, 1, 2, 3, 4].map((n) => `section-${n}`);

const App = () => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((elRefs) =>
      Array(array.length)
        .fill()
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [array.length]);

  return (
    <div className="App">
      <Header refs={elRefs} />
      <Blog refs={elRefs} />
    </div>
  );
};

export default App;
