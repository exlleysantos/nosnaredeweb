import React, { useState } from 'react';

import UserProfile from '../../components/UserProfile';
import Box from '../../components/Box';
import { Container, BioInfos } from './styles';

// import api from '../../services/api';

const Profile = () => {
	const [user] = useState({ name: 'Antonio Santos' });

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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, in pellentesque
							tempus felis, sociis elit, euismod enim, tincidunt duis.
						</p>
					</div>

					<div>
						<header>
							<h3>Disciplinas que ministra</h3>
						</header>
						<p>Matemática e física.</p>
					</div>

					<div>
						<header>
							<h3>ORCID</h3>

							<button>VER</button>
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
