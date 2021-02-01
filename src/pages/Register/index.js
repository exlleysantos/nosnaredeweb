import React, { useState, useRef } from 'react';
import * as Yup from 'yup';

import { H1 } from '../../components/Typography';
import Box from '../../components/Box';
import Button from '../../components/Button';
import { Form, Input, Select, FileInput, MaskedInput } from '../../components/Form';
import { Container, FormContainer, Title, Subjects, Subject, AvatarText } from './styles';

import { GrFormAdd } from 'react-icons/gr';
import { CgTrashEmpty } from 'react-icons/cg';
import { useCallback } from 'react';

import api from '../../services/api';

const options = [
	{ value: 'elementary_1', label: 'Ensino fundamental' },
	{ value: 'elementary_2', label: 'Ensino médio' },
	{ value: 'elementary_1', label: 'Ensino superior' },
];

const Register = () => {
	const formRef = useRef(null);

	const [subjects, setSubjects] = useState([]);
	const [level, setTeachingDegree] = useState(undefined);
	
	function redirecionar(){
		if(window.confirm("USUÁRIO CADASTRADO!")){
			window.location.href = "https://nosnaredeweb.herokuapp.com/"
		}
	}

	const handleAddSubject = useCallback(() => {
		const subject = formRef.current.getFieldValue('subjectName');

		if (!subject) {
			return formRef.current.setFieldError('subjectName', 'Informe um interesse');
		}

		setSubjects((subjects) => [...subjects, subject]);
		formRef.current.setFieldValue('subjectName', '');
	}, []);

	const handleRemoveSubject = useCallback((removedIndex) => {
		return setSubjects((subjects) => subjects.filter((_, index) => index !== removedIndex));
	}, []);

	const handleSubmit = useCallback(
		async (formData) => {
			try {
				console.log('isso é o formdata', formData);

				const validationSchema = Yup.object().shape({
					fullname: Yup.string().required('Informe seu nome'),
					cpf: Yup.string().required('Informe seu SPF'),
					birthDate: Yup.string().required('Informe sua data de nascimento'),
					institution: Yup.string().required('Campo obrigatório'),
					level: Yup.string().required('Campo obrigatório'),
					username: Yup.string().required('Campo obrigatório'),
					email: Yup.string().required('Campo obrigatório'),
					password: Yup.string().required('Informe uma senha')
				});

				await validationSchema.validate(formData, { abortEarly: false });

				formRef.current.setErrors({});

				if (!subjects.length) {
					alert('Informe seus interesses');
					return formRef.current.setFieldError('subjectName', 'Informe seus interesses');
				}

				const payload = new FormData();
				
				for (const key in formData) {
					payload.append(key, formData[key]);
				}

				payload.append('subjects', subjects);

				await api.post('users', payload);
				return redirecionar();
			} catch (error) {

				console.error("aqui o seu erro, ó:", error.message);

				if (error instanceof Yup.ValidationError) {
					console.log('entrou aqui')
					const errors = {};

					error.inner.forEach(({ path, message }) => (errors[path] = message));
					return formRef.current.setErrors(errors);
				}
			}
		},
		[subjects]
	);

	return (
		<Container>
			<Title onClick={() => console.log(level)}>
				#Entre<span>NÓS</span>naRede
			</Title>
			<FormContainer>
				<H1>Cadastro</H1>

				<Form ref={formRef} onSubmit={handleSubmit}>
					<section>
						<h3>Dados pessoais</h3>

						<Box>
							<Input name='fullname' placeholder='Nome completo' size={2} />
							<MaskedInput
								name='cpf'
								placeholder='CPF'
								mask='999.999.999-99'
								size={1}
							/>
							<Input
								name='birthDate'
								placeholder='Data de nascimento'
								type='date'
								size={1}
							/>
						</Box>
					</section>

					<section>
						<h3>Dados profissionais</h3>

						<Box>
							<Input
								name='institution'
								placeholder='Instituição de trabalho'
								size={2}
							/>
							<Select
								name='level'
								options={options}
								onChange={({ value }) => setTeachingDegree(value)}
								placeholder='Grau de ensino'
								size={2}
							/>

							{level === 2 && (
								<Input name='series' placeholder='Ano/série' size={2} />
							)}

							<Input name='lattes' placeholder='Lattes (opcional)' size={1} />
							<Input name='orcid' placeholder='Orcid (opcional)' size={1} />

							<Subjects>
								<h3>Interesses</h3>

								<Input name='subjectName' placeholder='Ex: Matemática, Documentos' />
								<Button type='button' isGhost onClick={handleAddSubject}>
									<GrFormAdd />
								</Button>

								<ul>
									{subjects.length ? (
										subjects.map((subject, index) => (
											<Subject key={index}>
												<span>{subject}</span>
												<Button
													type='button'
													onClick={() => handleRemoveSubject(index)}>
													<CgTrashEmpty />
												</Button>
											</Subject>
										))
									) : (
										<li className='empty'>
											Você ainda não adicionou um interesse
										</li>
									)}
								</ul>
							</Subjects>
						</Box>
					</section>

					<section>
						<h3>Dados da conta</h3>

						<Box>
							<Input name='username' placeholder='Nome de usuário' size={2} />
							<Input name='email' placeholder='Email' size={2} />
							<Input name='password' placeholder='Senha' size={2} />

							<AvatarText>
								<h3>Foto de perfil</h3>
								<span>
									* Escolha sua melhor foto para que os outros usuários vejam.
								</span>
							</AvatarText>

							<FileInput
								label='Foto de perfil'
								name='profileImage'
								accept={['jpg', 'jpeg', 'png']}
								overlayText='Foto de perfil'
								size={2}
							/>
						</Box>
					</section>

					<Button size={4}>Cadastrar</Button>
				</Form>
			</FormContainer>
		</Container>
	);
};

export default Register;
