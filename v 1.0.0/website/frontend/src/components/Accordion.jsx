import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/menu.css";

// const accordionItems = [
//   {
//     label: <h3>...</h3>,
//     text: <p>...</p>,
//   },
//   {
//     label: <h3>...</h3>,
//     text: <p>...</p>,
//   },
//   {
//     label: <h3>...</h3>,
//     text: <p>...</p>,
//   },
// ];

const Item = ({ label, text }) => {
  const [show, setShow] = useState(false);

  return (
    <li className="accordion-item">
      <span onClick={() => setShow(!show)} className="accordion-trigger">
        {label}
        <FontAwesomeIcon
          icon={faAngleDown}
          size="xl"
          style={{
            transform: show ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 150ms",
          }}
        />
      </span>
      {show && <span className="accordion-content">{text}</span>}
    </li>
  );
};

const Accordion = ({ children }) => (
  <ul className="accordion-menu">{children}</ul>
);

Accordion.Item = Item;

export default Accordion;
