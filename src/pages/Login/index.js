import React, { useRef, useEffect, useContext, useState } from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom'

import Button from '../../components/Button';
import { Form, Input } from '../../components/Form';
import { Container, FormContainer, Title, SubTitle, Welcome } from './styles';

import {GET, POST} from '../../services/api';

import { AuthContext } from '../../store/Auth';

const Login = () => {
	const formRef = useRef(null);

	const { signIn } = useContext(AuthContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	console.log(email,password)

	useEffect(() => {
		/** useEffect usado para verificar se o usuário já esta autenticado.
		 * caso sim, o redireciona para outra página;
		 */

		const isUserAuthenticated = async () => {
			try {
				const authToken = localStorage.getItem('@AUTH');

				if (authToken) {
					const headers = { authorization: `Bearer ${authToken}` };
					const response = await GET('https://nosnaredeapi.herokuapp.com/sessions', {
						headers,
					});

					const isAuthenticated = response.status === 200 ? true : false;

					if (isAuthenticated) {
						return (window.location = '/profile');
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
			e.preventDefault();

			const payload = { email, password };
			const { data } = await POST('https://nosnaredeapi.herokuapp.com/sessions', payload);
			alert("data aqui", data);
			const validationSchema = Yup.object().shape({
				email: Yup.string().email().required(),
				password: Yup.string().required(),
			});

			await validationSchema.validate(payload);

			signIn(data.user, data.auth);

		} catch (error) {
			if (error instanceof Yup.ValidationError) {
				return alert('Preencha todos os campos corretamente');
			}
			const { status } = error;

			switch (status) {
				case 404:
					return alert('Usuário nao encontrado');
				case 401:
					return alert('Senha incorreta');
				case 503:
					return alert('Serviço Indisponível')
				default:
					return alert('Erro', {status});
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

				<Form ref={formRef} onSubmit={handleLogin}>
					<Input name='email' placeholder='Email' size={4} value={email} onChange={(e) => setEmail(e.target.value)} />
					<Input name='password' placeholder='Senha' type='password' size={4} value={password} onChange={(e) => setPassword(e.target.value)}/>

					<Button size={4}>Entrar</Button>

				</Form>
					<Link to="/register" className="buttom">Cadastre-se</Link>

				
			</FormContainer>
		</Container>
	);
};

export default Login;
