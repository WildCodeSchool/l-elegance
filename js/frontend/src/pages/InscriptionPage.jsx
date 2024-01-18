import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";

export default function InscriptionPage() {
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
    <div id="inscription">
      <div className="hero">
        <div />
        <div>
          <h1>Création de votre compte</h1>
          <p>
            Vous avez déja un compte ? <a href="/connexion">Connectez-vous</a>
          </p>
        </div>
        <div className="logo">
          <img src="../src/assets/logo.png" alt="" />
        </div>
      </div>
      <div className="formulaire">
        <div className="formulaire-interieur">
          <h2>
            Nous avons besoin de quelques informations pour créer votre profil
          </h2>
          <div>
            <form>
              <input
                type="text"
                label="Email"
                name="lastname"
                value={formValue.lastname}
                onChange={onChange}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
