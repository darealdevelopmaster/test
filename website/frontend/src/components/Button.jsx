import React from "react";
import PropTypes from "prop-types";

import "../styles/components/buttons.css";

// Sizes -> normal, small
// Primary || Outline
// Primay -> Blue, Orange, White

const Button = ({
  color = "blue",
  mode = "primary",
  small = false,
  disabled = false,
  fullWidth = false,
  label,
  ...props
}) => {
  mode == "outline" ? `btn-${mode}` : mode;
  const colorProp = mode == "primary" ? `btn-${color}` : "";

  small = small ? "btn-sm" : "";
  disabled = disabled ? "btn-disabled" : "";

  return (
    <button
      className={["btn", `btn-${mode}`, colorProp, small, disabled]
        .join(" ")
        .trim()}
      style={{
        width: fullWidth ? "100%" : "auto",
      }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["orange", "white"]),
  mode: PropTypes.oneOf(["primary", "outline"]),
  small: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
