import styled from 'styled-components'

export const ContainerError = styled.div`
    display:flex;
    justify-content:center;
    align-items :center;
    width:100%;
    height:70vh;
    padding:2em;
    @media screen and (max-width:960px){
        flex-direction:column;
    }
`

export const ContainerInfoError = styled.div`
    width:40%;
    padding:1em;
    text-align:center;
`

export const TextError = styled.h1`
    font-size :4em;
    
`

export const ContainerImgError = styled.div`
    width:60%;
    filter:invert(70%);
`

export const ImgError = styled.img`
    width:100%;
`

export const LInkError = styled.a`
    color:#fff;
    text-decoration:none;
    padding:0.5em;
    display:block;
    border:1px solid #29d;
    margin:1em 0px;
    &:hover{
        background:#29d;
        transition:500ms;
    }
`