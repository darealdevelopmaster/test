import {
  faChartBar,
  faCheck,
  faPlay,
  faQuestionCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import IconBox from "./IconBox";
import Overlay from "./Overlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Button from "./Button";

/*
  variant: ['Success', 'Fail', 'Warning', 'Results', 'Start']
*/

const icons = {
  success: faCheck,
  fail: faTimes,
  warning: faQuestionCircle,
  results: faChartBar,
  start: faPlay,
};

const colors = {
  success: "green",
  fail: "red",
  warning: "orange",
  results: "#1877F2",
  start: "#239AB9",
};

const Modal = ({ variant, title, desc, content, showModal, setShowModal }) => {
  const icon = icons[variant];
  const color = colors[variant];

  return (
    <Overlay>
      <motion.div
        animate={{
          opacity: [0, 1],
          translateY: [20, 0]
        }}
        exit={{
          opacity: [1, 0],
          translateY: [0, 20]
        }}
        transition={{
          duration: 0.25
        }}
        className="max-w-[65vw] bg-white w-[500px] gap-8 rounded-xl p-8 grid items-center relative">
        <IconBox showModal={showModal} setShowModal={setShowModal} close size="small" />
        <div className="mx-auto my-9">
          <FontAwesomeIcon icon={icon} size="10x" color={color} />
        </div>
        <div className="modal-title text-center">
          <h2 className="font-bold mb-8">{title}</h2>
          <p className="small mx-auto max-w-[300px]">{desc}</p>
        </div>
        <div className="modal-content mb-8">{content}</div>
        <Button onClick={() => setShowModal(!showModal)} fullWidth label={"Show Results"} />
      </motion.div>
    </Overlay>
  );
};

export default Modal;
