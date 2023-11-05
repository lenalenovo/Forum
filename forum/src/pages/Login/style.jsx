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
    display: flex;
    flex-direction: column;
    width: 18vw;
    gap: 15px;
    `

export const InputStyle = styled.input`
height: 5vh;
border-radius: 5px;
border: 2px solid #d6d3d3;
padding-left: 12px;
`

export const ButtonStyle = styled.button`
    background-color: #f57914;
    height: 5vh;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    color: white;
    text-shadow: 0.5px 1px 1px #868484;
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
  height: 90vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-left: 200px;
  margin-top: 30px;
`
export const EsquerdaLogin = styled.div`
   width: 30vw;
  height: 80vh;
  flex-direction: column;
  background-color: #f448A0;
  border-radius: 10%;
`