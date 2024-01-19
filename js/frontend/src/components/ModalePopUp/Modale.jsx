import React, { useState, useEffect } from "react";
import "./modale.css";
import down from "../../assets/icon/down.png";
import up from "../../assets/icon/up.png";
import { useQuestionContext } from "../../context/QuestionContext";
import { MDBBtn, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle } from "mdb-react-ui-kit";

// const product = [
//   {
//     id: 1,
//     title: "Shampoing réparateur moléculaire sans sulfate",
//     description:
//       "Lorsque le cheveu est abîmé, sa structure moléculaire composée de peptides est atteinte. La plupart des peptides sont trop gros pour être réinjectés, rendant les dommages presque irréversibles.",
//     ingredients: [
//       "AQUA / WATER / EAU",
//       "SODIUM COCOYL ISETHIONATE",
//       "DISODIUM LAURETH SULFOSUCCINATE",
//       "GLYCOL DISTEARATE",
//       "SODIUM LAURYL SULFOACETATE",
//       "SODIUM LAUROYL SARCOSINATE",
//       "GLYCERIN",
//       "PARFUM / FRAGRANCE",
//       "DECYL GLUCOSIDE",
//       "COCAMIDOPROPYL BETAINE",
//       "PPG-5-CETETH-20",
//       "COCO-BETAINE",
//       "DIVINYLDIMETHICONE/DIMETHICONE COPOLYMER",
//       "AMODIMETHICONE",
//       "CITRIC ACID",
//       "SODIUM HYDROXIDE",
//       "POLYQUATERNIUM-7",
//       "POLYQUATERNIUM-10",
//       "CARBOMER",
//       "SODIUM BENZOATE",
//       "SODIUM CHLORIDE",
//       "PEG-55 PROPYLENE GLYCOL OLEATE",
//       "PROPYLENE GLYCOL",
//       "ARGININE",
//       "SALICYLIC ACID",
//       "BENZOIC ACID",
//       "POLYSORBATE 21",
//       "TRIDECETH-6",
//       "LINALOOL",
//       "C12-13",
//       "ALKETH-23",
//       "C12-13",
//       "ALKETH-3",
//       "GLYCINE",
//       "SERINE",
//       "TYROSINE",
//       "CETRIMONIUM CHLORIDE",
//       "GLUTAMIC ACID",
//     ],
//     image:
//       "https://www.lorealprofessionnel.fr/-/media/master/fr/lancements/2023/absolut-repair-molecular/absolut_repair-molecular_shampoing__/absolut_repair-molecular_shampoing__.jpg",
//   },
// ];

function Modale({ pop, handleClose, idProduct, centredModal, setCentredModal, toggleOpen }) {
  const { products } = useQuestionContext()
  const [contents, setContent] = useState(false);
  const [rotateArrow, setRotateArrow] = useState(false);
  const showUnshow = () => {
    setRotateArrow(!rotateArrow);

    setContent(!contents);
  };

  const [product, setProduct] = useState({})
  console.log(product)

  useEffect(() => {
    const foundProduct = products.find(item => item.id == idProduct)
    setProduct(foundProduct)
  }, [])

  return (
    // <div className="window-product">
    //   <div className={`pop-up-product${pop ? " pop-active" : " pop-unactive"}`}>
    //     <div className="block-left">
    //       <img src={product.image_url} />
    //     </div>
    //     <div className="block-right">
    //       <p className="title">{product.name}</p>
    //       <p className="description">{product.details}</p>
    //       <div className="which-ingredients">
    //         <div className="show-ingredients">
    //           <button onClick={showUnshow}>
    //             <p>Comment appliquer ce produit ?</p>
    //             <img
    //               src={rotateArrow ? up : down}
    //               alt="Afficher les ingrédients."
    //             />
    //           </button>
    //         </div>
    //         {contents && (
    //           <div className="ingredients">
    //             <p>{product.ingredients}</p>
    //           </div>
    //         )}
    //         {/* <p className="using">{product[0].ingre}</p> */}
    //       </div>
    //       <div className="buttons-action">
    //         <button onClick={handleClose} className="back-to-diagnostic">
    //           Retour au diagnostic.
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <MDBModal className="modalzoo" tabIndex='-1' open={centredModal} setOpen={setCentredModal} animationDirection="top">
      <MDBModalDialog centered size="xl">
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle className="titlez">{product.name}</MDBModalTitle>

          </MDBModalHeader>
          <MDBModalBody>
            <div className="modalpop">
              <img className="modal-img" src={product.image_url} alt="produit" />
              <p className="description">{product.ingredients}</p>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn className="btn-more" color='secondary' onClick={toggleOpen}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
}

export default Modale;