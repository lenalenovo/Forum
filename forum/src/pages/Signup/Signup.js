import React, { useState } from 'react';
import cadastroImagem from '../../assets/img-create.png'
import { ButtonStyle, CardLogin, ContainerDiv, FormStyle, ImagemStyle, InputStyle, PStyle, SectionStyle } from '../Login/style';
import Header from '../../componentes/Header/Header';
import { useData } from '../../hooks/useData';
import { useTokenNotNull} from '../../hooks/usetokenNotNull';
import { ContainerGeradl2222 } from '../../GlobalStyled';
import { DireitaCad, EsquerdaCard, ImagemSpeakCadastro, LogoCadastro, TituloCadastro, TituloDireita } from './styled';
import BarbieSpeak from "../../assets/BarbieSpeak.png"
import LogoSpeakOut from "../../assets/LogoSpeakOut.png"
import axios from 'axios';

function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    // const {form, onChangeForm, message} = useData(
    //     {name:'', email:'', password:''},
    //     'api/user/create'
    // );

    const handleSubmit = () => {
        const data = {
            name,
            email,
            password
        };
        alert(data);
        const response = axios.post('http://localhost:3008/api/user/create', data);
        if (response.data.success) {
            alert('cadastrou');
            //redirect login
        } else {
            alert('Nao cadastrou');
        }

    }
    // console.log(form)
    // useTokenNotNull()

    return (
        <>
        <form>
            <input 
                placeholder='Nome'
                type="text"                            
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                placeholder='Emali'
                type="text"                            
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                placeholder='Senha'
                type="text"                            
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>cadastrar</button>
        </form>
        {/* <Header/>

            <ContainerGeradl2222>
            <CardLogin>
                <EsquerdaCard>
                   <LogoCadastro src={LogoSpeakOut}/>

                   <TituloDireita>
                    Cadastro
                   </TituloDireita>

                    <FormStyle >

                        <InputStyle
                            placeholder='Nome'
                            type="text"                            
                            value={name}
                            onChange={(e) => setName(e.target.name)}
                        />

                        <InputStyle
                            placeholder='E-mail'
                            name='email'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.email)}
                        />

                        <InputStyle
                            placeholder='Senha'
                            name='password'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.password)} 
                        />
                        {message &&  <p>{message} </p>} 
                        <ButtonStyle onClick={handleSubmit}>Entrar</ButtonStyle>
                    </FormStyle>



                </EsquerdaCard>

                <DireitaCad>
                    <TituloCadastro>
                        Oi, Barbie
                    </TituloCadastro>

                    <ImagemSpeakCadastro src={BarbieSpeak} />
                </DireitaCad>


            </CardLogin>
            </ContainerGeradl2222> */}

        </>
    )
}

export default SignUp