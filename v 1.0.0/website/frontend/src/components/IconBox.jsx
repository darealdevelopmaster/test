import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import PropType from "prop-types";

import "../styles/layout.css";

const IconBox = ({ size = "large", close = false, icon, showModal, setShowModal }) => {
  if (size == "large") {
    size = "lg";
  } else if (size == "small") {
    size = "sm";
  }

  if (close == true) {
    return (
      <div
        className="icon-box icon-close icon-sm hover:cursor-pointer mr-0 ml-auto"
        onClick={() => setShowModal(!showModal)}
        title="Close"
      >
        <FontAwesomeIcon icon={faClose} />
      </div>
    );
  }

  return (
    <div className={["icon-box", `icon-${size}`].join(" ")}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

IconBox.propTypes = {
  size: PropType.oneOf(["large", "small"]),
};

export default IconBox;
