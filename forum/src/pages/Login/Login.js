import React, { useState } from 'react';
import Header from "../../componentes/Header/Header"
import { ButtonStyle, CardLogin, DireitaLogin, EsquerdaLogin, FormStyle, H1, H3, H4, ImagDireira, InputStyle, PStyle, Paragrafo, Textfield } from './style';
import { useData } from '../../hooks/useData';
import { useTokenNotNull } from '../../hooks/usetokenNotNull';
import { ContainerGeradl2222 } from '../../GlobalStyled';
import LogoSpeakOut from "../../assets/LogoSpeakOut.png"
import { useNavigate } from 'react-router-dom';
import { TituloDireita } from '../Signup/styled';
import axios from 'axios';

function Login() {
    //const {form, onChangeForm, handleSubmit, message} = useData({username:'', password:''},'/user/login');

    // useTokenNotNull()

    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = async () => {
        
        const data = {
            nome,
            senha
        };

        const response = await axios.post('http://localhost:3001/api/auth/login', data);
        //?}}]lert(response.data)
        if (response.data.success) {
            alert('Suceesso!');
        } else {
            alert('Deu erro!');
        }
    }    


    return (
        <>
            <Header
                titulo={"login"}
            />
            <ContainerGeradl2222>
            <CardLogin>
                <EsquerdaLogin>
                    <H1>
                    Bem vindo
                    de volta!
                    </H1>

                    <H3>
                    Acesse a sua conta agora mesmo!
                    </H3>

                </EsquerdaLogin>

                <DireitaLogin>
                    
                    <ImagDireira src={LogoSpeakOut}/>
                        <H4>
                            Login
                        </H4>

                    <FormStyle >
                        <InputStyle
                            placeholder='Nome'
                            type="text"
                            name='username'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)} />

                        <InputStyle
                            placeholder='Senha'
                            type="password"
                            name='password'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} />
                            
                        {/* {message &&  <p>{message} </p>} */}

                        <ButtonStyle onClick={handleSubmit}>Entrar</ButtonStyle>
                    
                    </FormStyle>
                </DireitaLogin>


            </CardLogin>
            </ContainerGeradl2222>
        </>
    )
}

export default Login





