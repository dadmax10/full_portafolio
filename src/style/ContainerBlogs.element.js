import styled from 'styled-components'

export const ContainerNewBlogs = styled.div`
    width:100%;
    display:flex;
    flex-direction :row;
    flex-wrap:wrap;
    padding:0.5em 2em;
`;

export const ContainerRegisterBlogs = styled.div`
    width:20%;
    padding:2em;
    @media screen and (max-width:968px){
        width : 100%;
    }
`

export const ContainerBlogsInfo = styled.div`
    width:80%;
    padding:1em;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    align-items :center;
    @media screen and (max-width:968px){
        width : 100%;
    }
`