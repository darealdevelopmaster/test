import React from "react";
import PropTypes from "prop-types";
import "../styles/components/tags.css";

const Tag = ({ color, children }) => {
  if (color) {
    color = `tag-${color}`;
  }

  return <span className={[`tag`, color].join(" ").trim()}>{children}</span>;
};

Tag.propTypes = {
  color: PropTypes.oneOf([
    "light-red",
    "dark-red",
    "green",
    "blue",
    "dark-blue",
    "darker-blue",
    "orange",
  ]),
};

export default Tag;
