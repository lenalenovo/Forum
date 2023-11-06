import { useLocation, useNavigate } from "react-router-dom"
import { ButtonMenu, InputSearch, MenuLogo, MenuStyle, Menutitulo } from "./style"
import { useContext,  useState} from "react"
import { GlobalStateContect } from "../../GlobalState/GlobalStateContext"
import style from "./style.css"
import { LogoHeader } from "../Header/style"
import MenuIcone from "../../assets/MenuIcone.png"
import LogoSpeakOut from "../../assets/LogoSpeakOut.png"

function Menu() {

    const navigate = useNavigate()
    const {selectedPostId, setSelectedPostId} = useContext(GlobalStateContect)
    const [activeButton, setActiveButton] = useState(false);
    const location = useLocation();

  
    
    return (
        <>

            <button class="hamburguerButton">
                <LogoHeader src={MenuIcone}/>
            </button>

            <nav class="menulateral">

            <MenuLogo src={LogoSpeakOut}/>
            <ul>
                {/* <InputSearch type="text"
                    placeholder="Filtrar por título"
                    value={selectedPostId}
                    onChange={(e) => setSelectedPostId(e.target.value)} /> */}
        
                <Menutitulo>Menu</Menutitulo>
                    
                  <li>
                    <ButtonMenu active={location.pathname === '/'} color="red" onClick={() => navigate('/')}>Feed</ButtonMenu>
                  </li>

                  <li>
                    <ButtonMenu  active={location.pathname === '/criarPost'} color="yellow" onClick={() => navigate('/criarPost')}>Postar</ButtonMenu>
                  </li>

                  <li>
                    <ButtonMenu  active={location.pathname === '/perfil'} color="yellow" onClick={() => navigate('/perfil')}>Perfil</ButtonMenu>
                 </li>
            </ul>
            </nav>

     
        </>
    )
}

export default Menu