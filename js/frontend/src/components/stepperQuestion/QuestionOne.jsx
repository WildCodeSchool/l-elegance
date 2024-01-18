import { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { useQuestionContext } from "../../context/QuestionContext";

function QuestionOne() {
  const { data, setData } = useQuestionContext();
  const [centredModal, setCentredModal] = useState(false);

  const toggleOpen = () => setCentredModal(!centredModal);

  return (
    <div>
      <h4 className="answer-title"> Avez-vous un Cancer de la peau?</h4>

      <div className="answer">
        <div>
          <button
            type="button"
            className={`answer-btn ${data.cancer ? "active" : ""}`}
            onClick={toggleOpen}
          >
            Oui
          </button>
        </div>
        <div>
          <button
            type="button"
            className={`answer-btn ${data.cancer === false ? "active" : ""}`}
            onClick={() => setData({ ...data, cancer: false })}
          >
            Non
          </button>
        </div>
      </div>
      <MDBModal tabIndex="-1" open={centredModal} setOpen={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className="pasdeproduitinfo">
                {" "}
                Informations
              </MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
              <p className="text-modale-pas-produit">
                Nous regrettons de vous informer que nos produits ne sont
                actuellement pas disponibles. Nous vous recommandons de
                consulter nos pharmaciens partenaires pour des conseils
                personnalisés. Nous nous excusons pour tout inconvénient et
                restons à votre disposition.{" "}
              </p>
              <p className="pasdeproduit"> L'Équipe L'Oréale</p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                className="btn-pas-produit"
                color="secondary"
                onClick={toggleOpen}
              >
                FERMER
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

export default QuestionOne;
