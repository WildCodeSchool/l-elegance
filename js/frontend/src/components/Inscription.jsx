import React, { useState } from "react";
import {
  MDBInput,
  MDBInputGroup,
  MDBBtn,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { useUserContext } from "../context/UserContext";

export default function InscriptionCo() {
  const navigate = useNavigate();
  const { register } = useUserContext();

  // function ValidateEmail(mail) {
  //     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
  //         return (true)
  //     }
  //     alert("You have entered an invalid email address!")
  //     return (false)
  // }

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    city: "",
    birthday: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  async function handleSubmit() {
    console.log(formValue);
    await register(formValue);
  }

  return (
    <MDBValidation className="row g-3">
      <MDBValidationItem
        feedback="Please choose a username."
        invalid
        className="col-md-4"
      >
        <MDBInputGroup textBefore="@">
          <MDBInput
            type="email"
            value={formValue.email}
            className="form-control"
            id="validationCustomUsername"
            placeholder="email"
            required
            onChange={onChange}
            name="email"
            pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
          />
        </MDBInputGroup>
      </MDBValidationItem>

      <MDBValidationItem
        className="col-md-6"
        feedback="Please provide a valid zip."
        invalid
      >
        <MDBInput
          type="password"
          value={formValue.password}
          name="password"
          onChange={onChange}
          id="validationCustom05"
          required
          label="Mot de passe"
        />
      </MDBValidationItem>
      <MDBValidationItem>
        <MDBInput
          type="password"
          name="confirmPassword"
          id="validationCustom05"
          required
          label="Mot de passe"
        />
      </MDBValidationItem>
      <MDBValidationItem>
        <MDBInput
          type="date"
          value={formValue.birthday}
          name="confirmPassword"
          onChange={onChange}
          id="validationCustom05"
          required
          label="Date de naissance"
        />
      </MDBValidationItem>
      <MDBValidationItem>
        <MDBInput
          type="text"
          value={formValue.city}
          name="city"
          onChange={onChange}
          id="validationCustom05"
          required
          label="Ville"
        />
      </MDBValidationItem>
      <MDBValidationItem>
        <MDBInput
          type="text"
          value={formValue.firstname}
          name="firstname"
          onChange={onChange}
          id="validationCustom05"
          required
          label="Prénom"
        />
      </MDBValidationItem>
      <MDBValidationItem>
        <MDBInput
          type="text"
          value={formValue.lastname}
          name="lastname"
          onChange={onChange}
          id="validationCustom05"
          required
          label="Nom"
        />
      </MDBValidationItem>
      <div className="col-12">
        <MDBBtn type="button" onClick={handleSubmit}>
          Submit form
        </MDBBtn>
      </div>
    </MDBValidation>
  );
}
