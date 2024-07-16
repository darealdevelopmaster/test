import IconBox from "./IconBox";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import "../styles/layout.css";

const Book = ({ src }) => {
  return (
    <div
      className="box"
      style={{
        aspectRatio: "3 / 4",
        overflow: "hidden",
      }}
      {...props}
    >
      <img src={src} />
    </div>
  );
};

const Video = ({ src, className="", ...props }) => {
  return (
    <div
      className={`box ${className}`.trim()}
      style={{
        aspectRatio: "4 / 3",
      }}
      {...props}
    >
      <video src={src} controls controlsList="nodownload"></video>
    </div>
  );
};

const Note = ({ className, content }) => {
  return (
    <div
      className={`note-box ${className}`}
      style={{
        aspectRatio: "4 / 3",
      }}
    >
      <div className="icon absolute top-[1rem] right-[1rem]">
        <IconBox icon={faEdit} size="small" />
      </div>
      {content}
    </div>
  );
};

const Box = () => {};

Box.Book = Book;
Box.Video = Video;
Box.Note = Note;

export default Box;
