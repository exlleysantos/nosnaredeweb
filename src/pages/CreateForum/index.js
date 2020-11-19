import React, { useCallback, useRef } from 'react';
import { Scope } from '@unform/core';

import Button from '../../components/Button';
import Box from '../../components/Box';
import { H1, H3 } from '../../components/Typography';
import { Form, TextArea, Checkbox } from '../../components/Form';
import { Container } from './styles';

const CreateForum = () => {
	const formRef = useRef(null);

	const handleSubmit = useCallback(async (formData) => {
		try {
			console.log(formData);
		} catch (error) {
			console.error(error);
		}
	}, []);

	return (
		<Container>
			<Box>
				<H1>Iniciar um novo fórum</H1>

				<Form ref={formRef} onSubmit={handleSubmit}>
					<TextArea name='title' size={4} rows={4} placeholder='Título do fórum' />

					<H3>Por favor, selecione a categoria do seu fórum:</H3>

					<Scope path='destination'>
						<Checkbox name='general' size={4} label='Gerais' />
						<Checkbox name='doubts' size={4} label='Dúvidas' />
						<Checkbox name='curiosity' size={4} label='Curiosidades' />
						<Checkbox
							name='Experience'
							size={4}
							label='Experiências'
						/>
					</Scope>
					<Button>Iniciar fórum</Button>
				</Form>
			</Box>
		</Container>
	);
};

export default CreateForum;
