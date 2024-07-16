import { useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/components/form.css";

export const Form = ({ children, ...props }) => {
  return (
    <>
      <form className="form" {...props}>
        {children}
      </form>
    </>
  );
};

export const Select = ({ id, options }) => {
  // const [select, setSelect] = useState(false);

  return (
    <>
      <div className="select-icon">
        <FontAwesomeIcon icon={faAngleDown} size="2x" className={""} />
      </div>
      <select className="text-right" id={id}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </>
  );
};

export const Input = ({ label, type, id, ...props }) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");

  function handleBlur(value) {
    if (value.length > 0) {
      setFocus(true);
      return;
    }
    setFocus(false);
  }

  return (
    <>
      <label htmlFor={id} className={focus ? "active" : ""}>
        {label}
      </label>
      <input
        autoComplete="off"
        onInput={(e) => setValue(e.target.value)}
        onBlur={() => handleBlur(value)}
        onFocus={() => setFocus(true)}
        className="flex-1"
        value={value}
        type={type}
        id={id}
        {...props}
      />
    </>
  );
};

export const TextArea = ({ id, placeholder }) => {
  const [words, setWords] = useState("");
  const wordsLimit = 400;

  function handleType(e) {
    if (words.length == wordsLimit) {
      setWords(words.slice(0, wordsLimit - 1));
      return;
    }

    setWords(e.target.value)
  }

  return (
    <>
      <textarea
        id={id}
        placeholder={placeholder}
        value={words}
        onInput={(e) => handleType(e)}
      />
      <label htmlFor={id}>{words.length} / {wordsLimit}</label>
    </>
  );
};

const Group = ({ children }) => {
  return <div className="input-group">{children}</div>;
};

const Title = ({ label, desc }) => {
  return (
    <div className="form-title">
      <h2>{label}</h2>
      <p>{desc}</p>
    </div>
  );
};

Input.Group = Group;
Select.Group = Group;
TextArea.Group = Group;
Form.Title = Title;
