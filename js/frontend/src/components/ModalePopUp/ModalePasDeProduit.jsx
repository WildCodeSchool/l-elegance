import React, { useState } from "react";
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

export default function ModalePasDeProduit() {
  const [centredModal, setCentredModal] = useState(false);

  const toggleOpen = () => setCentredModal(!centredModal);

  return (
    <>
      <MDBBtn onClick={toggleOpen}>Vertically centered modal</MDBBtn>

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
    </>
  );
}
