import { Link } from "react-router-dom";
import ConnexionComponent from "../components/Connexioncomponent";
import { MDBBtn } from "mdb-react-ui-kit";
import { useUserContext } from "../context/UserContext";

export default function Connexion() {
    const { user, logout } = useUserContext();
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
                        Customisez votre visite en vous connectant
                    </h2>
                    {user.isconnected && (<div className='col-12'>
                        <MDBBtn type='button' onClick={logout}>Déconnexion</MDBBtn>
                    </div>)}
                    {!user.isconnected && <div><ConnexionComponent /></div>}
                </div>
            </div>
        </div>
    );
}
