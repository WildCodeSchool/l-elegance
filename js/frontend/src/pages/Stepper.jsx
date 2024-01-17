import React, { useRef } from "react";
import { MDBStepper, MDBStepperStep } from "mdb-react-ui-kit";

function Stepper() {
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  return (
    <div>
      <MDBStepper
        type="vertical"
        externalNext={nextRef}
        externalPrev={prevRef}
        // disableHeadSteps
      >
        <MDBStepperStep
          contentClassName="stepContent"
          headIcon={1}
          headText="Stucture d'accueil"
          itemId={1}
        ></MDBStepperStep>
        <MDBStepperStep
          headIcon={2}
          headText="Présentation"
          itemId={2}
        ></MDBStepperStep>

        <MDBStepperStep
          contentClassName="h-auto"
          headIcon={3}
          headText="Votre équipe"
          itemId={3}
        ></MDBStepperStep>
        <MDBStepperStep
          headIcon={4}
          headText="Services et Activitées"
          itemId={4}
        ></MDBStepperStep>
        <MDBStepperStep
          headIcon={5}
          headText="Vos disponibilitées"
          itemId={5}
        ></MDBStepperStep>
        <MDBStepperStep
          headIcon={6}
          headText="Nombre de places"
          itemId={6}
        ></MDBStepperStep>
        <MDBStepperStep
          headIcon={7}
          headText="Règlement intérieur"
          itemId={7}
        ></MDBStepperStep>
        <MDBStepperStep
          headIcon={8}
          headText="Récapitulatif"
          itemId={8}
        ></MDBStepperStep>
        <MDBStepperStep
          headIcon={9}
          headText="Bienvenue"
          itemId={9}
        ></MDBStepperStep>
      </MDBStepper>
      ;
    </div>
  );
}

export default Stepper;
