function Card({ name, image_url, details, handleSeeMore, id }) {
  return (
    <div className="container container-card">
      <div
        className="container-card-img "
        style={{
          backgroundImage: `url(${image_url ?? "https://www.beaute-test.com/uploads/images/products/ba764171c96fdb4de54f788e67747f99de7c7319.jpg"})`,
          height: "400px",
          aspectRatio: "  2 / 3",
          backgroundPosition: "cover"
        }}
      />
      <div className="text-card">
        <h2>{name ?? "Produit beauté"}</h2>
        <p className="cut">
          {details}
        </p>
        <button className="btn-more" type="button" onClick={() => handleSeeMore(id)}>
          Voir le détail
        </button>
      </div>
    </div>
  );
}

export default Card;
