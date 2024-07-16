import Tag from "./Tag";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Course = ({ element, subscribe, newCard }) => {
  const navigate = useNavigate();
  const { id, title, img, desc, tags } = element;

  return (
    <div
      className={["course-card", `${newCard ? "new" : ""}`].join(" ").trim()}
    >
      <div className="course-card__image">
        <img src={img} alt={title} />
      </div>
      <div className="course-card__info">
        <div className="tags">
          {tags.map((tag, index) => {
            return <Tag key={index}>{tag}</Tag>;
          })}
        </div>
        <h3 className="course-card__title">{title}</h3>
        <p className="course-card__desc small">{desc}</p>
      </div>
      {subscribe ? (
        <Button
          id={id}
          fullWidth
          small
          label={"Subscribe"}
          disabled
          onClick={() => {}}
        />
      ) : (
        <Button
          id={id}
          fullWidth
          small
          label={"Subscribe"}
          onClick={() => navigate(`/courses/${id}`, { state: element })}
        />
      )}
    </div>
  );
};

export default Course;
