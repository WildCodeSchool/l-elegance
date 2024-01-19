import React, { useState } from "react";
import Bandeau from "../components/Bandeau";
import InfoPharma from "../components/InfoPharma";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Slider from "../components/Slider";
import Modale from "../components/ModalePopUp/Modale";
// Import de Context.
import { useQuestionContext } from "../context/QuestionContext";

function Resultats() {
  const { products } = useQuestionContext();
  const resCut = products.slice(0, 5);

  const [pop, setPop] = useState(false);
  const [displayPop, setDisplayPop] = useState(false);

  const handleActive = () => { };

  const handleClose = () => {
    setDisplayPop(!displayPop);
    setPop(!pop);
    //   setTimeout(() => {
    //     setPop(false);
    // }, 500);
  };

  return (
    <>
      <Nav />
      <Bandeau
        title={products.length === 0 ? "Nous n'avons pas de résultats" : null}
        subtitle={
          products.length === 0
            ? "Découvrez quelques produits makeup qui peuvent vous convenir"
            : null
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
    </>
  );
}

export default Resultats;