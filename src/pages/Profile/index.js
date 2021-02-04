import React from 'react';

import UserProfile from '../../components/UserProfile';
import Box from '../../components/Box';
import { Container, BioInfos } from './styles';



const Profile = () => {

	const userData = localStorage.getItem('@USER');
	const user = JSON.parse(userData);
	console.log(user)
	
	return (
		<Container>
			<Box>
				<UserProfile data={user} />
			</Box>

			<Box>
				<BioInfos>
					<div>
						<header>
							<h3>Interesses</h3>
						</header>
						<p>
							Ainda não há interesses para exibir.
						</p>
					</div>
					<div>
						<header>
							<h3>ORCID: {user.orcid} </h3>
							
							<button>VER</button>
						</header>
					</div>
					<div>
						<header>
							<h3>Lattes: {user.lattes} </h3>
							<button>VER</button>
						</header>
					</div>


					<div>
						<header>
							<h3>Tradutor</h3>
							<button>VER</button>
						</header>
					</div>

					<div>
						<header>
							<h3>Agenda</h3>

							<button href="https://google.com">VER</button>
						</header>
					</div>

					<div>
						<header>
							<h3>Tradutor</h3>

							<button href="https://google.com">VER</button>
						</header>
					</div>

					<div>
						<header>
							<h3>Calculadora</h3>

							<button href="https://google.com">VER</button>
						</header>
					</div>
				</BioInfos>
			</Box>
		</Container>
	);
};

export default Profile;
