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
							
							<a href={user.orcid} target="blank"><button>VER</button></a>
						</header>
					</div>
					<div>
						<header>
							<h3>Lattes: {(user.lattes)? user.lattes : "Não informado"} </h3>
							<a href={user.lattes} target="blank"><button>VER</button></a>
						</header>
					</div>


					<div>
						<header>
							<h3>Tradutor</h3>
							<a href="https://translate.google.com.br/" target="blank"><button>VER</button></a>
						</header>
					</div>

					<div>
						<header>
							<h3>Agenda</h3>

							<a href="https://calendar.google.com/calendar/" target="blank"><button>VER</button></a>
						</header>
					</div>
					<div>
						<header>
							<h3>Calculadora</h3>

							<a href="https://www.google.com/search?q=calculadora" target="blank"><button>VER</button></a>
						</header>
					</div>
				</BioInfos>
			</Box>
		</Container>
	);
};

export default Profile;
