function Card() {
  return (
    <div className="container container-card">
      <div
        className="container-card-img"
        style={{ backgroundImage: "url('./src/assets/img-basic.png')" }}
      />
      <div className="text-card">
        <h2>Age Perfect Renaissance Cellulaire Midnight Sérum - 30ml</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          aliquam in lectus in consectetur. Suspendisse justo quam, eleifend
          quis suscipit id, porttitor at nunc. Phasellus sit amet neque
          bibendum, mollis nisi ac, tincidunt lorem. Cras lobortis tortor quis
          nisl semper, id interdum nibh tincidunt.
        </p>
        <button className="btn-more" type="button">
          VOIR LE DÉTAIL
        </button>
      </div>
    </div>
  );
}

export default Card;
