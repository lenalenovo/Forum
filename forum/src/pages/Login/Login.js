import React from 'react';
import Header from "../../componentes/Header/Header"
import { ButtonStyle, CardLogin, ContainerDiv, DireitaLogin, EsquerdaLogin, FormStyle, InputStyle, PStyle } from './style';
import { useData } from '../../hooks/useData';
import { useTokenNotNull } from '../../hooks/usetokenNotNull';
import { ContainerGeradl2222 } from '../../GlobalStyled';


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
                    <h2>We’ve Missed You!</h2>
                    <PStyle>More than 150 questions are waiting for your wise suggestions!</PStyle>

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

                </EsquerdaLogin>

                <DireitaLogin>
                    oi
                </DireitaLogin>


            </CardLogin>
            </ContainerGeradl2222>
        </>
    )
}

export default Login





