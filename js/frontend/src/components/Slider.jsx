import "../../style/slider.css";

function Slider() {
  return (
    <div className="suggestion-make-up">
      <div className="statement">
        <h3 className="sub-title">Découvrir</h3>
        <h2 className="title">L'Oréal à de l'élégence.</h2>
        <p className="description">
          Découvrez les réalisations, les engagements et les aspirations qui
          inspirent L'Oréal depuis plus de 100 ans.
        </p>
      </div>
      <div className="slide-make-up">
        {suggestions.map((product, index) => (
          <div key={index} className="card-make-up">
            <img src={product.image_url} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;