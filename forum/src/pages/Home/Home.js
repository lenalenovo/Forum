import Card from "../../componentes/Card/Card";
import HeaderPerfil from "../../componentes/Header/HeaderPerfil";
import Historicos from "../../componentes/Historicos/Historicos";
import Menu from "../../componentes/Menu/Menu";
import { SectionStyle } from "./style";
import { useVerificarToken } from "../../hooks/useverificarToken";
import { ContainerGeral } from "../../GlobalStyled";


function Home({ news }) {


    useVerificarToken()


    return (
        <>
            <HeaderPerfil
                news={news}
                titulo={'Questions'}
            />

            <ContainerGeral>
            <SectionStyle>
                <Card />

                {/* <Historicos /> */}

            </SectionStyle>
            </ContainerGeral>

        </>
    )
}


export default Home