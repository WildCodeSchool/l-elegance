import React, { useState } from "react";
import "./modale.css";
import down from "../../assets/icon/down.png";
import up from "../../assets/icon/up.png";

const product = [
  {
    id: 1,
    title: "Shampoing réparateur moléculaire sans sulfate",
    description:
      "Lorsque le cheveu est abîmé, sa structure moléculaire composée de peptides est atteinte. La plupart des peptides sont trop gros pour être réinjectés, rendant les dommages presque irréversibles.",
    ingredients: [
      "AQUA / WATER / EAU",
      "SODIUM COCOYL ISETHIONATE",
      "DISODIUM LAURETH SULFOSUCCINATE",
      "GLYCOL DISTEARATE",
      "SODIUM LAURYL SULFOACETATE",
      "SODIUM LAUROYL SARCOSINATE",
      "GLYCERIN",
      "PARFUM / FRAGRANCE",
      "DECYL GLUCOSIDE",
      "COCAMIDOPROPYL BETAINE",
      "PPG-5-CETETH-20",
      "COCO-BETAINE",
      "DIVINYLDIMETHICONE/DIMETHICONE COPOLYMER",
      "AMODIMETHICONE",
      "CITRIC ACID",
      "SODIUM HYDROXIDE",
      "POLYQUATERNIUM-7",
      "POLYQUATERNIUM-10",
      "CARBOMER",
      "SODIUM BENZOATE",
      "SODIUM CHLORIDE",
      "PEG-55 PROPYLENE GLYCOL OLEATE",
      "PROPYLENE GLYCOL",
      "ARGININE",
      "SALICYLIC ACID",
      "BENZOIC ACID",
      "POLYSORBATE 21",
      "TRIDECETH-6",
      "LINALOOL",
      "C12-13",
      "ALKETH-23",
      "C12-13",
      "ALKETH-3",
      "GLYCINE",
      "SERINE",
      "TYROSINE",
      "CETRIMONIUM CHLORIDE",
      "GLUTAMIC ACID",
    ],
    image:
      "https://www.lorealprofessionnel.fr/-/media/master/fr/lancements/2023/absolut-repair-molecular/absolut_repair-molecular_shampoing__/absolut_repair-molecular_shampoing__.jpg",
  },
];

function Modale() {
  const [contents, setContent] = useState(false);
  const [rotateArrow, setRotateArrow] = useState(false);

  const showUnshow = () => {
    setContent(!contents);
    setRotateArrow(!rotateArrow);
  };

  return (
    <div className="pop-up-product">
      <div className="block-left">
        <img src={product[0].image} />
      </div>
      <div className="block-right">
        <p className="title">{product[0].title}</p>
        <p className="description">{product[0].description}</p>
        <div className="which-ingredients">
          <div className="show-ingredients">
            <button onClick={showUnshow}>
              <p>Comment appliquer ce produit ?</p>
              <img
                src={rotateArrow ? up : down}
                alt="Afficher les ingrédients."
              />
            </button>
          </div>
          {contents && (
            <div className="ingredients">
              {product[0].ingredients.map((ingredient) => (
                <ul>
                  <li>{ingredient}</li>
                </ul>
              ))}
            </div>
          )}
          {/* <p className="using">{product[0].ingre}</p> */}
        </div>
        <div className="buttons-action">
          <button className="back-to-diagnostic">Retour au diagnostic.</button>
        </div>
      </div>
    </div>
  );
}

export default Modale;
