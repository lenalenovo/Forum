import Card from "../../componentes/Card/Card";
import HeaderPerfil from "../../componentes/Header/HeaderPerfil";
import Historicos from "../../componentes/Historicos/Historicos";
import Menu from "../../componentes/Menu/Menu";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { SectionStyle } from "./style";
import { useVerificarToken } from "../../hooks/useverificarToken";
import { ContainerGeral } from "../../GlobalStyled";
import { BASE_URL } from "../../constants/url";
import { GlobalStateContect } from "../../GlobalState/GlobalStateContext";


function Home({ news }) {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    useEffect(() => {
        const token = sessionStorage.getItem("token")
        if (!token) {
            navigate("/")
        }
    }, [navigate])

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