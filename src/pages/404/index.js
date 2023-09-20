import React from 'react';

import { Container } from './styles';
// error page is loaded whan an error occured or the page do not exists
const Error404 = () => {
	return (
		<Container>
			<h1>404</h1>
			<p>Página não encontrada</p>
		</Container>
	);
};

export default Error404;
