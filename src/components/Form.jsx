import React from 'react'
import { ContainerFormItems, InputForm, TitleForm } from '../style/Form.element'
import Button from "../components/Button"
function Form() {
  return (
    <>
        <ContainerFormItems>
            <TitleForm>Formulario</TitleForm>
            <InputForm placeholder='Nombre Completo' type="text"/>
            <InputForm placeholder='Email Completo' type="email"/>
            {Button("#", "Enviar")}
        </ContainerFormItems>
    </>
  )
}

export default Form