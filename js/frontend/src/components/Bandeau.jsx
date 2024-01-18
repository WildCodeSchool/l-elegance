function Bandeau({ title, subtitle }) {
  return (
    <div className="bandeau">
      <div className=" container ">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </div>
  );
}

export default Bandeau;
