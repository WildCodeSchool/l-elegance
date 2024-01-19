import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="underline-nav"></div>
      <div className="container container-nav">
        <Link to="/" className="logo ">
          {" "}
          <img className="img-fluid" src="../src/assets/logo.png" alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
