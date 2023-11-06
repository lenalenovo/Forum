import styled from "styled-components";

export const FormStyle = styled.form`
    width: 60vw;
    height: 70vh;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    margin-top: 10px;
    padding: 30px;
    border-radius: 20px;
    gap: 20px;
`

export const SelectCategorias = styled.select`
    width: 20.5vw;
`

export const InputStyle = styled.input`
    width: 30vw;
    height: 1vh;
    border-radius: 5px;
    outline: 0;
    border: none;
    padding: 20px;
    background-color: rgba(255, 212, 234, 1);

    &:: placeholder{
        color: rgba(180, 0, 92, 1);
        font-weight: bold;
    }
`

export const AreaTitulo = styled.div`
    color: white;
    background-color: rgba(236, 67, 153, 1);
    font-family: "Poppins", sans-serif;
    width: 55vw;
    height: 08vh;
    border-radius: 20px;
    justify-content: start;
    outline: 0;
    border: none;
    display: flex;
`

export const CardBolinha = styled.div`
  width: 03.5vw;
  height: 07vh;
  border-radius: 100%;
  margin: 03px;
  background-color: white;
`

export const InputTitulo = styled.input`
    width: 30vw;
    height: 1vh;
    border-radius: 5px;
    outline: 0;
    border: none;
    padding: 20px;
    background: transparent;

    &:: placeholder{
        color: white;
    }
`

export const TextareaStyle = styled.textarea`
    background-color: rgba(255, 212, 234, 1);
    color: rgba(180, 0, 92, 1);
    resize: none;
    width: 85%;
    height: 25vh;
    border-radius: 10px;
    /* outline: none; */
    border: none;
    font-family: "Poppins", sans-serif;

    &:: placeholder{
        color: rgba(180, 0, 92, 1);
        font-weight: bold;
    }

`

export const ContainerDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 20vw;
`

export const ButtonStyle = styled.button`
    padding: 6px;
    align-self: end;
    margin-right: 10.1vw;
    border: none;
    background-color: rgba(236, 67, 153, 1);
    padding: 8px;
    width: 8vw;
    border-radius: 5px;
    box-shadow: 1px 1px 5px black;
    color: white;
    font-size: 12px;
`

export const ContainerCriarPost = styled.div`
    display: flex;
    margin-top:1vh;
`