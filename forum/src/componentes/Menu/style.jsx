import styled from "styled-components";


export const MenuStyle = styled.aside`
    display: flex;
    flex-direction: column;
    /* border: 1px solid black; */
    box-shadow: 0px 2px 3px black;
    width: 30vh;
    grid-column: 1/1;
    grid-row: 1/2;
    padding: 10px;
    gap: 2px;
`

export const InputSearch = styled.input`
    height: 3vh;
    width: 25vw;
    border-radius: 4px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    padding: 5px;
    margin-left: 20%;
    box-shadow: 0px 1px 3px black;
`

export const MenuLogo = styled.img`
    height: 80px;
    weight: 80px;
    margin: 20px;
`

export const ButtonMenu = styled.button`
    height: 10vh;
    padding: 5px;
    width: 20vw;
    border: none;
    color: ${(props) => (props.active ? 'white' : 'black')};
    border-radius: 4px;
    background-color: ${(props) => (props.active ? '#f448A0' : '#fafafa')};
`

export const Menutitulo = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin-left: 40px; 
    color: #f448A0;
    font-weight: bold
`
