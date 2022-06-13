import React,{useState} from 'react'
import { ContainerFormItems, InputForm, TitleForm } from '../style/Form.element'

// import appAndresTech from "../credenciales";
import {getFirestore, collection,addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from "firebase/firestore"
import app from "../lib/firebase"

const db = getFirestore(app);

function Form() {

    const valorInicial = {
        title : "",
        email : ""
    }
    const [formData, setFormData] = useState(valorInicial);

    const changeHandle = e => {
        const {name, value} = e.target;
        setFormData({...formData,[name] : value })
    }

    const handleSaveData = async (e) =>{
        e.preventDefault();
        try {
            await addDoc(collection(db,"Usuarios"), {
                ...formData
            })
        } catch (error) {
            console.log("conexion fallida con la BD", error)
        }
        setFormData({...valorInicial})
    }

    
    return (
        <>
            <ContainerFormItems onSubmit={handleSaveData}>
                <TitleForm>Formulario</TitleForm>
                <InputForm placeholder='Nombre Completo' name= "title" type="text" onChange={changeHandle} value={formData.title}/>
                <InputForm placeholder='Email Completo'  name='email' type="email" onChange={changeHandle} value ={formData.email}/>
                <InputForm type="submit" value="Enviar"/>
            </ContainerFormItems>
        </>
    )
}

export default Form