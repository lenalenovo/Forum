import Card from "../../componentes/Card/Card";
import HeaderPerfil from "../../componentes/Header/HeaderPerfil";
import Historicos from "../../componentes/Historicos/Historicos";
import Menu from "../../componentes/Menu/Menu";
import { SectionStyle } from "./style";
import { useVerificarToken } from "../../hooks/useverificarToken";


function Home({ news }) {


    useVerificarToken()


    return (
        <>
            <HeaderPerfil
                news={news}
                titulo={'Questions'}
            />

            <SectionStyle>
                <Menu />
                <Card />

                <Historicos />

            </SectionStyle>

        </>
    )
}


export default Home