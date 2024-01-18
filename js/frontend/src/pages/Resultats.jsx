import Bandeau from "../components/Bandeau";
import InfoPharma from "../components/InfoPharma";
import Nav from "../components/Nav";
import Card from "../components/Card";

function Resultats() {
  return (
    <>
      <Nav />
      <Bandeau />
      <div className="text-resultat">
        <div className="container">
          <h2>EN SAVOIR PLUS SUR VOUS</h2>
          <h3>Confiez-vous, nous vous guiderons au mieux</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            aliquam in lectus in consectetur. Suspendisse justo quam, eleifend
            quis suscipit id, porttitor at nunc. Phasellus sit amet neque
            bibendum, mollis nisi ac, tincidunt lorem. Cras lobortis tortor quis
            nisl semper, id interdum nibh tincidunt..
          </p>
        </div>
      </div>
      <div className="container recommandations">
        <h3>Nos recommandations pour vous</h3>
      </div>

      <div className="container container-resultat">
        <div className="resultat">
          <Card />
        </div>

        <InfoPharma />
      </div>
    </>
  );
}

export default Resultats;
