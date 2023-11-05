import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import FundoB from "./assets/FundoB.png"
import fundoBarbie from "./assets/fundoBarbie.png"

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
 
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  code {
  font-family: roboto, source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  
`
export const ContainerGeral = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%; 
    background-image:url(${FundoB});
`

export const ContainerGeradl2222 = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: column;

    height: 100vh; 
    background-image: url(${fundoBarbie});
`

export const GeralPost = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh; 
    background-image:url(${FundoB});
`

export const ContainerCenter = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`