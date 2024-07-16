import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../styles/layout.css";

const ScrollToTop = () => {
  return (
    <div className="scroll-to-top" onClick={() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }}>
      <FontAwesomeIcon size="3x" rotation={180} icon={faAngleDown} />
    </div>
  );
};

export default ScrollToTop;
