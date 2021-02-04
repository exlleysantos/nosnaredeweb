import React from 'react';

import Routes from './routes';
import { GlobalStyles } from './styles/GlobalStyles';
import { AuthProvider } from './store/Auth/';

const App = () => (
	<AuthProvider>
		<Routes />
		<GlobalStyles />
	</AuthProvider>
);

export default App;
