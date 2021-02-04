import React, { useEffect, useContext, useState, useRef } from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom'

import Button from '../../components/Button';
import { Form, Input } from '../../components/Form';
import { Container, FormContainer, Title, SubTitle, Welcome } from './styles';

import api from '../../services/api';

import { AuthContext } from '../../store/Auth';

const Login = () => {
	const formRef = useRef(null);

	const { signIn } = useContext(AuthContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		/** useEffect usado para verificar se o usuário já esta autenticado.
		 * caso sim, o redireciona para outra página;
		 */

		const isUserAuthenticated = async () => {
			try {
				const authToken = localStorage.getItem('@token');

				if (authToken) {
					const headers = { authorization: `Bearer ${authToken}` };
					const response = await api.get('/sessions', {
						headers,
					});
					console.log(headers);

					const isAuthenticated = response.status === 200 ? true : false;

					if (isAuthenticated) {
						return (window.location = '/profiles');
					}
				}
			} catch (error) {
				console.error(error);
			}
		};

		isUserAuthenticated();
	}, []);

	const handleLogin = async (e) => {
		try {
			if (e && e.preventDefault) e.preventDefault()

			console.log("Evento:", e);

			const payload = { email, password };
			
			const validationSchema = Yup.object().shape({
				email: Yup.string().required('Informe um E-mail'),
				password: Yup.string().required('Informe uma senha'),
			});
			
			await validationSchema.validate(payload);
			formRef.current.setErrors({});
			
			const { data } = await api.post('/sessions', payload);
			signIn(data.user, data.token.token, true);

		} catch (error) {
			if (error instanceof Yup.ValidationError) {
				return alert('Preencha todos os campos corretamente');
			}
			console.log(error.response.status);

			switch (error.response.status) {
				case 404:
					return alert('Usuário nao encontrado');
				case 401:
					return alert('Senha incorreta');
				default:
					return alert('Erro de servidor');
			}
		}
	};

	return (
		<Container>
			<FormContainer>
				<Title>
					#Entre<span>NÓS</span>naRede
				</Title>
				<SubTitle>Educadores em interações virtuais</SubTitle>

				<Welcome>
					<p>Seja bem-vind@</p>
					<span>ao #EntreNósnaRede</span>
				</Welcome>

				<Form ref= {formRef} onSubmit={handleLogin}>
					<Input name='email' placeholder='Email'type= 'email' size={4} value={email} onChange={(e) => setEmail(e.target.value)} />
					<Input name='password' placeholder='Senha' type='password' size={4} value={password} onChange={(e) => setPassword(e.target.value)}/>

					<Button size={4}>Entrar</Button>
				</Form>	
					<hr />
					<Link to="/register">Cadastre-se</Link>
			</FormContainer>
		</Container>
	);
};

export default Login;
