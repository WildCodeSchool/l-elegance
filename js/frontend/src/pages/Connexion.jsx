import { Link } from "react-router-dom";
import ConnexionComponent from "../components/Connexioncomponent";

export default function Connexion() {
    return (
        <div id="inscription">

            <div className="hero">
                <div />
                <div>
                    <h1>Connexion</h1>
                    <p>
                        Créer votre compte, <Link to="/inscription"><span className="navbar-link mahdi">Inscription</span></Link>
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
                    <div> <ConnexionComponent /></div>
                </div>
            </div>
        </div>
    );
}
