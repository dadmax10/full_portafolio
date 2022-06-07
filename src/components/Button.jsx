import React from 'react'

import styled from "styled-components";

const LinkButton = styled.a`
  width: auto;
  display:inline-block;
  padding:1em 4em;
  background:transparent;
  color:#08fdd8;
  border: 2px solid #08fdd8;
  text-decoration:none;
  font-size:1.3em;
  margin:1em 0px;
  &:hover{
    background:#08fdd8;
    color:#000;
    transition:1s;
  }
`

function Button(linkBoton, textBoton) {
  return (
    <>
      <LinkButton href={linkBoton}>{textBoton}</LinkButton>
    </>
  )
}

export default Button