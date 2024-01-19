import React, { useState } from "react";
import Bandeau from "../components/Bandeau";
import InfoPharma from "../components/InfoPharma";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Slider from "../components/Slider";
import Modale from "../components/ModalePopUp/Modale";
// Import de Context.
import { useQuestionContext } from "../context/QuestionContext";
import { useUserContext } from "../context/UserContext";
import Footer from "../components/Footer";

function Resultats() {
  const { user } = useUserContext();
  const { products } = useQuestionContext();
  const [pop, setPop] = useState(false);
  const [displayPop, setDisplayPop] = useState(false);
  const [idProduct, setIdProduct] = useState("");
  const [centredModal, setCentredModal] = useState(false);

  const toggleOpen = (id) => {
    setCentredModal(!centredModal);
    setIdProduct(id)
    // setDisplayPop(true);
  };

  const resCut = products.slice(0, 5);


    const handleSeeMore = (id) => {
    }
  
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
          {resCut.map(ele => (
            <div><Card name={ele.name} details={ele.details} image_url={ele.image_url} id={ele.id} handleSeeMore={toggleOpen} /> <InfoPharma /></div>))}
          <Slider />
          {centredModal && <Modale idProduct={idProduct} pop={pop} handleClose={handleClose} centredModal={centredModal} setCentredModal={setCentredModal} toggleOpen={toggleOpen}/>}
        </div>

      </div>
      <Slider />
      <Footer />
    </>
  );
}

export default Resultats;