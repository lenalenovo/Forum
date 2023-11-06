import React from 'react';
import Header from "../../componentes/Header/Header"
import { ButtonStyle, CardLogin, DireitaLogin, EsquerdaLogin, FormStyle, H1, H3, H4, ImagDireira, InputStyle, PStyle, Paragrafo, Textfield } from './style';
import { useData } from '../../hooks/useData';
import { useTokenNotNull } from '../../hooks/usetokenNotNull';
import { ContainerGeradl2222 } from '../../GlobalStyled';
import LogoSpeakOut from "../../assets/LogoSpeakOut.png"
import { useNavigate } from 'react-router-dom';
import { TituloDireita } from '../Signup/styled';

function Login() {
    const {form, onChangeForm, handleSubmit, message} = useData({username:'', password:''},'/user/login');

    useTokenNotNull()


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

                    <FormStyle onSubmit={handleSubmit}>
                        <InputStyle
                            placeholder='Nome'
                            type="text"
                            name='username'
                            value={form.username}
                            onChange={onChangeForm} />

                        <InputStyle
                            placeholder='Senha'
                            type="password"
                            name='password'
                            value={form.password}
                            onChange={onChangeForm} />
                            
                        {message &&  <p>{message} </p>}

                        <ButtonStyle type="submit">Entrar</ButtonStyle>
                    
                    </FormStyle>
                </DireitaLogin>


            </CardLogin>
            </ContainerGeradl2222>
        </>
    )
}

export default Login





