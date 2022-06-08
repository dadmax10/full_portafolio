import React from 'react'
import { ContainerFormInfo, DescForm, TitleForm } from '../style/ContainerForm.element'
import Button from "../components/Button"

function ContainerForm() {
  return (
    <>
        <ContainerFormInfo>
            <TitleForm>Unete a la Comunidad</TitleForm>
            <DescForm>Creemos una comunidad cada ves mas grande para aprender entre todos</DescForm>
            {Button("#", "Canal de Telegram")}
        </ContainerFormInfo>
    </>
  )
}

export default ContainerForm