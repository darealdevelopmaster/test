import PropTypes from "prop-types";
import Course from "./Course";
import Category from "./Category";

// Category -> title, img
// Course -> img, title, desc, tags ['array (2)']

const Cards = ({ elements, type = "categories" }) => {
  // Check if elements isn't null
  if (elements.length == 0) 
    return (
      <div>No Elements to display</div>
    );

  if (type == "courses")
    return (
      <div
        style={{
          columnGap: "20px",
          rowGap: "70px",
          gridColumn: "1 / span 3"
        }}
      >
        {elements.map((element, index) => (
          <Course key={index} element={element} />
        ))}
      </div>
    );

  if (type == "categories")
    return (
      <div
        className={`grid "grid-cols-1 sm:grid-cols-2 md:grid-cols-3`}
        style={{
          columnGap: "20px",
          rowGap: "70px",
        }}
      >
        {elements.map((element, index) => (
          <Category key={index} element={element} />
        ))}
      </div>
    );
};

Cards.propTypes = {
  elements: PropTypes.array.isRequired, // Array of objects
  type: PropTypes.oneOf(["courses", "categories"]), // Type of cards
};

export default Cards;