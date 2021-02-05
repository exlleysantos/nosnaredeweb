import React, { useState, useRef, useEffect } from 'react';

import ListUserProfile from '../../components/ListUserProfile';
import Button from '../../components/Button';
import { Form, Input } from '../../components/Form';
import { H1, H2 } from '../../components/Typography';
import { Container, SubtitleContainer, EducatorsList, buttonStyle } from './styles';

import api from '../../services/api';

const Educators = () => {
	const searchRef = useRef(null);
	const userId = localStorage.getItem('@USER');

	const [educators, setEducators] = useState([]);

    useEffect(() => {
        api.get('users', {
            headers: {
                Authorization: userId,
            }
        }).then(response => {
            setEducators(response.data);
        })
	}, [userId]);

	return (
		<Container>
			<H1>Educadores em Rede</H1>

			<Form ref={searchRef} columns='4fr 1fr'>
				<Input
					name='search'
					placeholder='Busque um professor por nome ou nome de usuário'
				/>
				<Button style={buttonStyle}>Buscar</Button>
			</Form>

			<SubtitleContainer>
				<H2>Professores do Cadastrados na Plataforma</H2>
				<span>Sugestões de interações</span>
			</SubtitleContainer>

			<EducatorsList>
				{educators.map((educator) => (
					<li key={educator.id}>
						<ListUserProfile data={educator} />
					</li>
				))}
			</EducatorsList>
		</Container>
	);
};

export default Educators;
