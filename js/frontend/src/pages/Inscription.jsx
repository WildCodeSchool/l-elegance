import InscriptionComponent from "../components/Inscription";
import Connexion from "../components/Connexioncomponent";
import { Link } from "react-router-dom";

export default function Inscription() {
  return (
    <div id="inscription">

      <div className="hero">
        <div />
        <div>
          <h1>Création de votre compte</h1>
          <p>
            Vous avez déja un compte ? <Link to="/connexion"><span className="navbar-link mahdi">Connectez-vous</span></Link>
          </p>
        </div>
        <div className="logo">
          <img src="../src/assets/logo.png" alt="" />
        </div>
      </div>
      <div className="formulaire">
        <div className="formulaire-interieur">
          <h2>
            Nous avons besoin de quelques informations pour créer votre profil
          </h2>
          <div> <InscriptionComponent /></div>
        </div>
      </div>
    </div>
  );
}
