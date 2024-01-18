import React, { useState } from 'react';
import {
    MDBInput,
    MDBInputGroup,
    MDBBtn,
    MDBValidation,
    MDBValidationItem
} from 'mdb-react-ui-kit';
import { useUserContext } from '../context/UserContext';

export default function Connexion() {

    const { login } = useUserContext();

    // function ValidateEmail(mail) {
    //     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
    //         return (true)
    //     }
    //     alert("You have entered an invalid email address!")
    //     return (false)
    // }

    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    });

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    async function handleSubmit() {
        console.log(formValue);
        await login(formValue);
    }

    return (
        <MDBValidation className='row g-3' >


            <MDBValidationItem feedback='Please choose a username.' invalid className='col-md-4'>
                <MDBInputGroup textBefore='@' className='mahdi'>
                    <MDBInput
                        type='email'
                        value={formValue.email}
                        className='form-control mahdi'
                        id='validationCustomUsername'
                        placeholder='email'
                        required
                        onChange={onChange}
                        name='email'
                        pattern='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'
                    />
                </MDBInputGroup>
            </MDBValidationItem>

            <MDBValidationItem className='col-md-6' feedback='Mot de passe obligatoire' invalid>
                <MDBInput
                    type="password"
                    value={formValue.password}
                    name='password'
                    onChange={onChange}
                    id='validationCustom05'
                    required
                    label='Mot de passe'
                />
            </MDBValidationItem>
            <div className='col-12'>
                <MDBBtn type='button' onClick={handleSubmit}>Submit form</MDBBtn>
            </div>

        </MDBValidation>
    );
}