import React, { useState } from "react";

export default function Inscription() {
  const { register } = useUserContext();

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formValue.email}
            onChange={onChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={formValue.password}
            onChange={onChange}
          />
        </label>
        <label>
          Firstname:
          <input
            type="text"
            name="firstname"
            value={formValue.firstname}
            onChange={onChange}
          />
        </label>
        <label>
          Lastname:
          <input
            type="text"
            name="lastname"
            value={formValue.lastname}
            onChange={onChange}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formValue.city}
            onChange={onChange}
          />
        </label>
        <label>
          Birthday:
          <input
            type="text"
            name="birthday"
            value={formValue.birthday}
            onChange={onChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
