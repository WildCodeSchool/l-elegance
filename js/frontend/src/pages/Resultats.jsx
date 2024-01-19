import React, { useState } from "react";
import Bandeau from "../components/Bandeau";
import InfoPharma from "../components/InfoPharma";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Slider from "../components/Slider";
<<<<<<< HEAD
import Modale from "../components/ModalePopUp/Modale";
=======
import Modale from "../components/Modale pop up/Modale";
>>>>>>> 8a911f75176c3fb2934c3a47f4f2707769823f19
// Import de Context.
import { useQuestionContext } from "../context/QuestionContext";
import { useUserContext } from "../context/UserContext";
import Footer from "../components/Footer";

function Resultats() {
  const { user } = useUserContext();
  const { products } = useQuestionContext();
  const resCut = products.slice(0, 5);

  const [pop, setPop] = useState(false);
  const [displayPop, setDisplayPop] = useState(false);

<<<<<<< HEAD
  const handleActive = () => { };

  const handleClose = () => {
    setDisplayPop(!displayPop);
    setPop(!pop);
    //   setTimeout(() => {
    //     setPop(false);
=======
  const handleActive = () => {};

  const handleClose = () => {
      setDisplayPop(!displayPop);
      setPop(!pop);
    //   setTimeout(() => {
          //     setPop(false);
>>>>>>> 8a911f75176c3fb2934c3a47f4f2707769823f19
    // }, 500);
  };

  return (
    <>
      <Nav />
      <Bandeau
        title={products.length === 0 ? "Nous n'avons pas de résultats" : `${user.firstname ?? ""}  Notre seletion de produits pour vous`}
        subtitle={
          products.length === 0
            ? "Découvrez quelques produits makeup qui peuvent vous convenir"
            : "L'Oréal vous accompagne  "
        }
      />

      {products.length && (
        <div className="text-resultat">
          <div className="container">
            <h2>UNE ROUTINE ADAPTÉE A VOTRE PROFIL</h2>
            <h3>Confiez-vous, nous vous guiderons au mieux</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              aliquam in lectus in consectetur. Suspendisse justo quam, eleifend
              quis suscipit id, porttitor at nunc. Phasellus sit amet neque
              bibendum, mollis nisi ac, tincidunt lorem. Cras lobortis tortor
              quis nisl semper, id interdum nibh tincidunt..
            </p>
          </div>

        </div>
      )}

      <div className="container recommandations">
        <h3>Nos recommandations pour vous</h3>
      </div>

      <div className="container container-resultat">
        <div className="resultat">
          {resCut.map((ele) => (
            <div className="card-result">
              <Card
                name={ele.name}
                details={ele.details}
                image_url={ele.image_url}
              />{" "}
              <InfoPharma />
            </div>
          ))}
        </div>

      </div>
      <Slider />
      <Footer />
    </>
  );
}

export default Resultats;