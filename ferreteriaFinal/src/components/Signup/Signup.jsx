import styles from "./Signup.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {auth} from "../../firebase";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { async } from "@firebase/util";
import { InputControl } from "../InputControl/InputControl"

export function Signup(){
    const navigate = useNavigate();
    const [values, setvalues] = useState ({ name:"",email:"",pass:"",contacto:"",domicilio:""});
    const [errorMsg, setErrorMsg] = useState([]);
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const registro =()=>{
        if(!values.name || !values.email || !values.pass || !values.contacto || !values.domicilio ){
            setErrorMsg("Llene todos los campos")
            return;
        }
        setErrorMsg("")
        setSubmitButtonDisabled(true)
        createUserWithEmailAndPassword(auth,values.email,values.pass,values.contacto,values.domicilio)
        .then(
            async (res)=>{
            setSubmitButtonDisabled(false);
            const user = res.user 
            await updateProfile(user,{
                displayName:values.name,
            });
            navigate("/")  
        })
        .catch((err)=> {
            setSubmitButtonDisabled(false);
            setErrorMsg(err.message);
        });  
    };
    return(<div className={styles.container}>
        <div className={styles.innerBox}>
        <h1 className={styles.heading}>Registro</h1></div>
        <InputControl label="Nombre y apellido"
        placeholder="Ingrese su nombre y apellido"
        onChange={(event)=> setvalues ((prev)=>({...prev,name:event.target.value}))}/>
        <InputControl label="Email"
        placeholder="Ingrese un correo"
        onChange={(event)=> setvalues ((prev)=>({...prev,email:event.target.value}))}/>
        <InputControl label="Contraseña"
        placeholder="Ingrese una contraseña"
        onChange={(event)=> setvalues ((prev)=>({...prev,pass:event.target.value}))}/>
        <InputControl label="Contacto"
        placeholder="Ingrese un contacto"
        onChange={(event)=> setvalues ((prev)=>({...prev,contacto:event.target.value}))}/>
        <InputControl label="Domicílio"
        placeholder="Ingrese su Domicílio"
        onChange={(event)=> setvalues ((prev)=>({...prev,domicilio:event.target.value}))}/>
        <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
            <button onClick={registro} disabled={submitButtonDisabled}>
                Guardar
            </button>
            <p>
                Si ya tienes una cuenta inicia sesión
                <span>
                    <span>
                        <Link to="/login"> Login</Link>
                    </span>
                    </span> 
            </p>
        </div>     
    </div>);
}
