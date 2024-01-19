import { useNavigate } from "react-router-dom";

import Bandeau from "../components/Bandeau";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <Nav />
            <Bandeau
                title="Des produits adaptés, une beauté résiliente"
                subtitle="Votre beauté, notre inspiration : Des produits adaptés à chaque étape de votre parcours unique."
            />
            <div className="text-resultat">
                <div className="container">
                    <h2>LE CONCEPT</h2>
                    <h3>Confiez-vous, nous vous guiderons au mieux</h3>
                    <p>
                        Notre plateforme a été créée avec une vision unique en tête :
                        célébrer la diversité et l'individualité de chacun, peu importe les
                        défis auxquels nous sommes confrontés. Nous croyons en une beauté
                        qui transcende les normes conventionnelles, une beauté qui émane de
                        la confiance et de la véritable expression de soi. Sur notre site,
                        vous trouverez une sélection soigneusement curated de produits
                        adaptés, conçus pour répondre à vos besoins uniques. Nous sommes
                        déterminés à vous accompagner à chaque étape de votre parcours, en
                        vous offrant des solutions qui célèbrent votre beauté intérieure et
                        extérieure.
                    </p>
                    <button
                        onClick={() => navigate("/le-questionnaire")}
                        type="button"
                        className="btn-more-round"
                    >
                        Faire le diagnostic
                    </button>
                </div>
            </div>
            <div className="container container-presentation">
                <div className="container-text-presentation-home">
                    <h2>Confiez-vous, nous vous guiderons au mieux</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                        aliquam in lectus in consectetur. Suspendisse justo quam, eleifend
                        quis suscipit id, porttitor at nunc. Phasellus sit amet neque
                        bibendum, mollis nisi ac, tincidunt lorem. Cras lobortis tortor quis
                        nisl semper, id interdum nibh tincidunt. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Vivamus aliquam in lectus in
                        consectetur. Suspendisse justo quam, eleifend quis suscipit id,
                        porttitor at nunc. Phasellus sit amet neque bibendum, mollis nisi
                        ac, tincidunt lorem. Cras lobortis tortor quis nisl semper, id
                        interdum nibh tincidunt..
                    </p>
                </div>

                <div className="container-img-presentation">
                    <img className="img-fluid" src="../src/assets/img-basic.png" alt="" />
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Home;
