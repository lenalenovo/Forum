import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Create from "../pages/Signup/Signup"
import Home from "../pages/Home/Home"
import CriarPost from "../pages/CriarPost/CriarPost"
import PerfilUser from "../pages/EditarPost/EditarPost"



function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="login" element={<Login/>} />
                <Route path="cadastrar" element={<Create/>}/>
                <Route path="criarPost" element={<CriarPost/>} />
                <Route path="perfil" element={<PerfilUser/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas