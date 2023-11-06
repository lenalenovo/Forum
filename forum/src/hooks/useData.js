import { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from './useForm';
import { BASE_URL } from '../constants/url';

export const useData = (initialForm, path) => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [form, onChangeForm] = useForm(initialForm);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3008/api/user/create`, form) //${BASE_URL}${path}
            .then(response => {
                if (response.data.token) {
                    // window.localStorage.setItem('token', response.data.token);
                    localStorage.setItem('token', response.data.token);
                    setMessage(response.data.data.message);
                    alert(response.data.data.message);
                    navigate('/');
                    console.log(response.data.success)
                    console.log(response.data.message)
                    console.log(response.data.data)
                    
                } else if(response.data.dada.message) {                 
                    setMessage("Usuário já cadastrado");
                }

            })
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    setMessage("Credenciais inválidas. Verifique seu email e senha.");
                } else {
                    setMessage("Erro desconhecido. Verifique a conexão com a API.");
                }
            });
    };

   

    return {
        form: form,
        onChangeForm: onChangeForm,
        handleSubmit: handleSubmit,
        message: message
    };
}
