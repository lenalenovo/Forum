import React from 'react';
import cadastroImagem from '../../assets/img-create.png'
import { ButtonStyle, CardLogin, ContainerDiv, FormStyle, ImagemStyle, InputStyle, PStyle, SectionStyle } from '../Login/style';
import Header from '../../componentes/Header/Header';
import { useData } from '../../hooks/useData';
import { useTokenNotNull} from '../../hooks/usetokenNotNull';
import { ContainerGeradl2222 } from '../../GlobalStyled';
import { DireitaCad, EsquerdaCard, ImagemSpeakCadastro, LogoCadastro, TituloCadastro, TituloDireita } from './styled';
import BarbieSpeak from "../../assets/BarbieSpeak.png"
import LogoSpeakOut from "../../assets/LogoSpeakOut.png"

function SignUp() {
    
    
    const {form, onChangeForm, handleSubmit, message} = useData({name:'', email:'', password:''},'api/user/create');

    console.log(form)
    useTokenNotNull()

    return (
        <>

        <Header/>

            <ContainerGeradl2222>
            <CardLogin>
                <EsquerdaCard>
                   <LogoCadastro src={LogoSpeakOut}/>

                   <TituloDireita>
                    Cadastro
                   </TituloDireita>

                    <FormStyle onSubmit={handleSubmit}>

                        <InputStyle
                            placeholder='Nome'
                            type="text"
                            name='name'
                            value={form.name}
                            onChange={onChangeForm}
                        />

                        <InputStyle
                            placeholder='E-mail'
                            name='email'
                            type="email"
                            value={form.email}
                            onChange={onChangeForm} />

                        <InputStyle
                            placeholder='Senha'
                            name='password'
                            type="password"
                            value={form.password}
                            onChange={onChangeForm} />
                        {message &&  <p>{message} </p>}
                        <ButtonStyle type="submit">Entrar</ButtonStyle>
                    </FormStyle>



                </EsquerdaCard>

                <DireitaCad>
                    <TituloCadastro>
                        Oi, Barbie
                    </TituloCadastro>

                    <ImagemSpeakCadastro src={BarbieSpeak} />
                </DireitaCad>


            </CardLogin>
            </ContainerGeradl2222>

        </>
    )
}

export default SignUp