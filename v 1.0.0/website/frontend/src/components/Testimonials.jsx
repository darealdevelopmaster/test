import "../styles/layout.css";

// quotes
// -- username
// -- img
// -- quote

const Testimonials = ({ quotes }) => {
  return (
    <div className="testimonials">
      <div className="section-title">
        <h1>ماذا قال طلابنا عنا</h1>
        <p className="small">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          vitae dolores sunt atque autem libero.
        </p>
      </div>
      {quotes.map(({ username, img, quote }, index) => (
        <div key={index} className="testimonial-card">
          <div className="testimonial-card__image">
            <img src={img} alt={username} />
          </div>
          <div className="testimonial-card__quote">
            <p className="small">
              <q>{quote}</q>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
