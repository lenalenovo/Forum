import { useContext, useEffect, useState } from 'react';
import { ButtonAsk, ButtonLista, ContainerButton, ContainerHeader, HeaderStyle, ImagemSeta, ImgIcone, ImgPerfil, LogoHeader, PrimeiroButton, Select, TituloHeader, Trocar } from './style'
import { useNavigate } from "react-router-dom";
import icone from "../../assets/notification.png"
import seta from "../../assets/caret.png"
import BarbieSpeak from "../../assets/BarbieSpeak.png"
import Menu from '../Menu/Menu';
import { InputSearch } from '../Menu/style';
import { GlobalStateContect } from "../../GlobalState/GlobalStateContext"

function HeaderPerfil(props) {

    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email'); // Você pode remover outras informações do usuário se necessário
        navigate('/login'); // Redirecionar para a página de login após o logout
    }

    const {selectedPostId, setSelectedPostId} = useContext(GlobalStateContect)



    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login'); // Redirecionar para a página de login se não houver token
        }
    }, [navigate]);


    return (
        <ContainerHeader>
            <Menu/>

            <InputSearch
            type="text"
            placeholder="Filtrar por título"
            value={selectedPostId}
            onChange={(e) => setSelectedPostId(e.target.value)}
            />

            <ContainerButton>
                <ButtonAsk onClick={() => navigate('/criarPost')}>Ask a questions</ButtonAsk>
                <ImgIcone src={icone} />
                <ImgPerfil src={BarbieSpeak} />

                <Trocar>
                    <PrimeiroButton onClick={() => setShowMenu(!showMenu)}> <img src={seta} /> </PrimeiroButton>

                    {showMenu && (
                        <>
                            {/* <ButtonLista onClick={() => { navigate('/editarPerfil') }}>Editar</ButtonLista> */}
                            <ButtonLista onClick={handleLogout}>Logout</ButtonLista>
                        </>
                    )}
                </Trocar>
            </ContainerButton>
        </ContainerHeader>
    )
}

export default HeaderPerfil