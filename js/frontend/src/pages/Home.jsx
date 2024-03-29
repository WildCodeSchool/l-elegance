import { useNavigate } from "react-router-dom";

import Bandeau from "../components/Bandeau";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useUserContext } from "../context/UserContext";

function Home() {
  const { user } = useUserContext();
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <Bandeau
        title={`Bienvenue ${user.firstname} ! Des produits adaptés, une beauté résiliene`}
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
          <h2>L'Oréal engagé dans la lutte contre le cancer</h2>
          <p>
            L'Oréal, en tant qu'entreprise, a pris l'initiative de s'engager activement dans la lutte contre le cancer. Cette démarche démontre son engagement envers la responsabilité sociale et son désir de contribuer positivement à la société. Les initiatives de lutte contre le cancer de L'Oréal peuvent prendre différentes formes, telles que le soutien à la recherche médicale, la sensibilisation du public, ou encore la mise en place de programmes d'aide aux patients. Grâce à ces actions, L'Oréal s'affirme comme une entreprise qui va au-delà de ses activités commerciales pour jouer un rôle significatif dans des causes sociales importantes, telles que la santé et le bien-être de la communauté.
          </p>
        </div>

        <div className="container-img-presentation">
          <img className="img-fluid" src="../src/assets/home3.jpg" alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
