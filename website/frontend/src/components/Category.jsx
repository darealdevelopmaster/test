const Category = ({ element }) => {
  return (
    <div className="category-card">
      <a href="#">
        <div className="category-card__image">
          <img src={element.img} alt={element.title} />
        </div>
        <h3 style={{ fontSize: "1.5rem" }}>{element.title}</h3>
      </a>
    </div>
  );
};

export default Category;
