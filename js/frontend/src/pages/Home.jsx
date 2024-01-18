import Bandeau from "../components/Bandeau";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Modale from "../components/Modale pop up/Modale";

function Home() {
  return (
    <>
      <Nav />
      <Bandeau />
      <div className="text-resultat">
        <div className="container">
          <h2>LE CONCEPT</h2>
          <h3>Confiez-vous, nous vous guiderons au mieux</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            aliquam in lectus in consectetur. Suspendisse justo quam, eleifend
            quis suscipit id, porttitor at nunc. Phasellus sit amet neque
            bibendum, mollis nisi ac, tincidunt lorem. Cras lobortis tortor quis
            nisl semper, id interdum nibh tincidunt..
          </p>
          <button type="button" className="btn-more-round">
            {" "}
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
          <button type="button" className="btn-more-round">
            {" "}
            Faire le diagnostic
          </button>
        </div>

        <div className="container-img-presentation">
          <img className="img-fluid" src="../src/assets/img-basic.png" alt="" />
        </div>
      </div>
      <Modale />
      <Footer />
    </>
  );
}

export default Home;
