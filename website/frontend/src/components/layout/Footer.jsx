import React from "react";

const Footer = () => {
  return (
    <footer className="bg-darkerBlue text-center py-28">
      <h3
        className="text-white text-[24px]"
        style={{
          paddingInline: "5vw",
          lineHeight: "1.4",
        }}
      >
        Developed by{" "}
        <a
          target="_blank"
          href="https://github.com/david900jason"
          className="hover:text-red hover:underline"
          style={{ fontStyle: "italic" }}
        >
          Ahmed
        </a>
        ,{" "}
        <a
          target="_blank"
          href="https://github.com/mostafatamer11"
          className="hover:text-red hover:underline"
          style={{ fontStyle: "italic" }}
        >
          Mostafa
        </a>
        {" and"}
        <a
          target="_blank"
          href="https://github.com/darealdevelopmaster/"
          className="hover:text-red hover:underline"
          style={{ fontStyle: "italic" }}
        >
          Yousef
        </a>
      </h3>
      <p className="text-white mt-4">
        All copy rights reserved © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
