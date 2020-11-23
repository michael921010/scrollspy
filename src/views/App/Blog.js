import React, { forwardRef } from "react";
import { array } from "./";
import Section from "./Section";

const Blog = ({ refs, ...props }) => (
  <div id="container">
    {array.map((n, i) => (
      <Section key={i} id={n} ref={refs[i]} />
    ))}
  </div>
);

export default Blog;
