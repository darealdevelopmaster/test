import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBell,
  faBook,
  faGlobe,
  faHome,
  faList,
  faMoon,
  faSignIn,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

// Assets
import NavLogo from "/logo.png";

// styles
import "../../styles/components/navbar.css";

const items = [
  <>
    <FontAwesomeIcon icon={faUser} />
    <span>
      <Link to={"/user/123456"}>ملفك الشخصي</Link>
    </span>
  </>,
  <>
    <FontAwesomeIcon icon={faBell} />
    <span>
      {/* <Link to={"/courses"}></Link> */}
      الاشعارت
    </span>
  </>,
  <>
    <FontAwesomeIcon icon={faMoon} />
    <span>الوضع الليلي</span>
  </>,
  <>
    <FontAwesomeIcon icon={faGlobe} />
    <span>اللغة</span>
  </>,
  <>
    <FontAwesomeIcon style={{ color: "red" }} icon={faSignIn} />
    <span style={{ color: "red" }}>
      <Link to={"/sign-in"}>تسجيل الدخول/الخروج</Link>
    </span>
  </>,
];

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  // If the Element isn't 'Dropdown' or 'Trigger' then the dropdown closes
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      if (triggerRef.current && !triggerRef.current.contains(e.target)) {
        setVisible(false);
      }
    }
  };
  document.addEventListener("mousedown", handleClickOutside);

  return (
    <>
      <nav>
        <div className="logo">
          <img
            className="cursor-pointer"
            onClick={() => {
              setVisible(false);
              navigate("/", { replace: true });
            }}
            src={NavLogo}
            alt="Logo"
          />
          <div className="dropdown">
            <AnimatePresence>
              {visible && (
                <motion.div
                  animate={{
                    opacity: [0, 1],
                    y: [-20, 0],
                  }}
                  exit={{
                    opacity: [1, 0],
                    y: [0, -20],
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="dropdown__menu"
                  ref={dropdownRef}
                >
                  {items.map((item, index) => {
                    return (
                      <div
                        onClick={() => setVisible(!visible)}
                        key={index}
                        className="dropdown__item"
                      >
                        {item}
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
            <div
              ref={triggerRef}
              className="dropdown__trigger"
              onClick={() => setVisible(!visible)}
            >
              <FontAwesomeIcon icon={faAngleDown} size="2x" />
            </div>
          </div>
        </div>
        <ul className="links">
          <li>
            <Link to={"/"}>
              <FontAwesomeIcon size="2x" icon={faHome} />
            </Link>
          </li>
          <li>
            <Link to={"/courses"}>
              <FontAwesomeIcon size="2x" icon={faList} />
            </Link>
          </li>
          <li>
            <Link to={"/books"}>
              <FontAwesomeIcon size="2x" icon={faBook} />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
