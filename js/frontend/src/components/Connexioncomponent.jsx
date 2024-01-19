
import React, { useState } from 'react';
import {
    MDBInput,
    MDBBtn,
    MDBValidation,
    MDBValidationItem
} from 'mdb-react-ui-kit';
import { useUserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function ConnexionComponent() {
    const navigate = useNavigate();
    const { login } = useUserContext();

    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    });

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    async function handleSubmit() {
        console.log(formValue);
        await login(formValue);
        navigate("/home");
    }

    return (
        <div className="inscription">
            <MDBValidation className='row g-3 col-md-6 adam' >

                <MDBValidationItem feedback='Email obligatoire' invalid className='col-md-12'>
                    <MDBInput
                        type='email'
                        value={formValue.email}
                        className='form-control'
                        id='validationCustomUsername'
                        label="Email"
                        required
                        onChange={onChange}
                        name='email'
                        pattern='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'
                    />
                </MDBValidationItem>

                <MDBValidationItem feedback='Mot de passe obligatoire' invalid>
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
                    <MDBBtn type='button' onClick={handleSubmit} className='btn-more' style={{ color: "black" }}>Connexion</MDBBtn>
                </div>
            </MDBValidation>
        </div>
    );
}

// import React, { useState } from 'react';
// import {
//     MDBInput,
//     MDBInputGroup,
//     MDBBtn,
//     MDBValidation,
//     MDBValidationItem
// } from 'mdb-react-ui-kit';
// import { useUserContext } from '../context/UserContext';

// export default function Connexion() {

//     const { login } = useUserContext();

//     // function ValidateEmail(mail) {
//     //     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
//     //         return (true)
//     //     }
//     //     alert("You have entered an invalid email address!")
//     //     return (false)
//     // }

//     const [formValue, setFormValue] = useState({
//         email: '',
//         password: '',
//     });

//     const onChange = (e) => {
//         setFormValue({ ...formValue, [e.target.name]: e.target.value });
//     };

//     async function handleSubmit() {
//         console.log(formValue);
//         await login(formValue);
//     }

//     return (
//         <MDBValidation className='row g-3' >


//             <MDBValidationItem feedback='Please choose a username.' invalid className='col-md-4'>
//                 <MDBInputGroup textBefore='@' className='mahdi'>
//                     <MDBInput
//                         type='email'
//                         value={formValue.email}
//                         className='form-control mahdi'
//                         id='validationCustomUsername'
//                         placeholder='email'
//                         required
//                         onChange={onChange}
//                         name='email'
//                         pattern='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'
//                     />
//                 </MDBInputGroup>
//             </MDBValidationItem>

//             <MDBValidationItem className='col-md-6' feedback='Mot de passe obligatoire' invalid>
//                 <MDBInput
//                     type="password"
//                     value={formValue.password}
//                     name='password'
//                     onChange={onChange}
//                     id='validationCustom05'
//                     required
//                     label='Mot de passe'
//                 />
//             </MDBValidationItem>
//             <div className='col-12'>
//                 <MDBBtn type='button' onClick={handleSubmit}>Submit form</MDBBtn>
//             </div>

//         </MDBValidation>
//     );
// }




//    <MDBValidation className='row g-3' >


//             <MDBValidationItem feedback='Please choose a username.' invalid className='col-md-4'>
//                 <MDBInputGroup textBefore='@' className='mahdi'>
//                     <MDBInput
//                         type='email'
//                         value={formValue.email}
//                         className='form-control mahdi'
//                         id='validationCustomUsername'
//                         placeholder='email'
//                         required
//                         onChange={onChange}
//                         name='email'
//                         pattern='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'
//                     />
//                 </MDBInputGroup>
//             </MDBValidationItem>

//             <MDBValidationItem className='col-md-6' feedback='Mot de passe obligatoire' invalid>
//                 <MDBInput
//                     type="password"
//                     value={formValue.password}
//                     name='password'
//                     onChange={onChange}
//                     id='validationCustom05'
//                     required
//                     label='Mot de passe'
//                 />
//             </MDBValidationItem>
//             <div className='col-12'>
//                 <MDBBtn type='button' onClick={handleSubmit}>Submit form</MDBBtn>
//             </div>

//         </MDBValidation>