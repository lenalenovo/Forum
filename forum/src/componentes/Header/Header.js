import { useNavigate } from 'react-router-dom'
import { ButtonLogin, ButtonRegister, HeaderStyle, LogoHeader } from './style'
import LogoSpeakOut from "../../assets/LogoSpeakOut.png"

function Header() {
    const navigate = useNavigate()
    return (
        <HeaderStyle>
            <LogoHeader src={LogoSpeakOut} alt='logo alem help' />
            <div>
                <ButtonRegister onClick={()=>{navigate('/cadastrar')}}>Cadastro</ButtonRegister>
                <ButtonLogin onClick={()=>{navigate('/login')}}>Login</ButtonLogin>
            </div>
        </HeaderStyle>
    )
}

export default Header