import styled from 'styled-components'

export const SectionStyle = styled.section`
    display: grid;
    grid-template-columns: 45% 55%;
    grid-template-rows: 1fr;
    justify-items: stretch;
    align-items: center;
    gap: 20px;
    /* justify-content:space-evenly; */
`

export const H4 = styled.h4`
  color: #f448A0;
  padding: 2%;
  padding-left: 47%;
  font-family: Arial, Helvetica, sans-serif;
  `

export const ContainerDiv = styled.div`
/* border: 1px solid black; */
display: flex;
flex-direction: column;
justify-self: center;
/* width: 20vw; */
padding: 10px;
grid-column: 1/1;
`

export const PStyle = styled.p`
width: 15vw;

`

export const FormStyle = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 80px;
    row-gap:17px;
    padding-top: 15px;
`

export const InputStyle = styled.input`
width: 70%;
border: none;
border-radius: 20px;
padding: 15px;
background: #ffaac2;
font-size: 12pt;
outline: none;
box-sizing: border-box;
`

export const ButtonStyle = styled.button`
    width: 30%;
    padding: 12px;
    margin: 05px;
    margin-left: 100px;
    border: none;
    border-radius: 10px;
    letter-spacing: 3px;
    background-color: #f448A0;
    cursor: pointer;
    color: white;
    box-shadow: 0px 10px 40px -12px  #3D0000;
`

export const ImagemStyle = styled.img`
    /* width: auto; */
    height: 90vh;
    justify-self: end;
    margin-top: 0.5vh;
    margin-right:1.9vw;
    grid-column: 2/2;
`

export const DireitaLogin = styled.div`
  width: 35vw;
  height: 80vh;
  flex-direction: column;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`

export const CardLogin = styled.div`
  width: 70vw;
  height: 85vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-left: 200px;
  margin-top: 10px;
`
export const EsquerdaLogin = styled.div`
   width: 30vw;
  height: 80vh;
  flex-direction: column;
  background-color: #f448A0;
  border-radius: 10%;
`

export const H1 = styled.h1`
  color: white;
  padding-left: 08%;
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 05%;
  letter-spacing: 1px;
`

export const H3 = styled.h3`
    color: white;
    padding: 15%;
    padding-left: 15%;
    font-family: Arial, Helvetica, sans-serif;
`

export const ImagDireira = styled.img`
    padding-top: 40px;
    padding-left: 70px;
    height: 15vh;
    weight: 15vw;
`
export const Paragrafo = styled.p`
   color: #f448A0;
   margin-left: 100px;
   justify-content: space-between;
`

