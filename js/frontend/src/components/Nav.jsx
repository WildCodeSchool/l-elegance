import { Link } from "react-router-dom";

function Nav() {

  return (
    <div>
      <div className="underline-nav"></div>
      <div className="container container-nav">

        <div className="logo">
          <img className="img-fluid" src="../src/assets/logo.png" alt="" />
        </div>
        <div className="navlink">
          <span ><Link ><span className="navbar-link">Le Concept</span></Link></span>
          <span ><Link> <span className="navbar-link">Le Questionnaire</span></Link></span>
          <span ><Link><span className="navbar-link"> Nos Partenaires</span></Link></span>
          <span ><Link> <span className="navbar-link">Contact</span></Link></span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
