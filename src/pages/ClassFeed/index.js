import React from 'react';
import { Link } from 'react-router-dom';

import Box from '../../components/Box';
import Button from '../../components/Button';
import { H1 } from '../../components/Typography';
import { Container, Feed, BoxContent, Tag } from './styles';

import { AiOutlineLink } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { FaChalkboardTeacher } from 'react-icons/fa';

const ClassFeed = () => {
	return (
		<>
			<Container>
				<header>
					<H1>Vídeo-Aulas</H1>
					<Link to='/share/class'>
						<Button>Nova Vídeo Aula</Button>
					</Link>
				</header>

				<Feed>
					<li>
						<Box>
							<BoxContent>
								<div>
									<Tag>
										<AiOutlineLink />
										Link
									</Tag>
									<p>Lorem ipsum dolor sit</p>
								</div>

								<span>05/10/202</span>
							</BoxContent>
						</Box>
					</li>
					<li>
						<Box>
							<BoxContent>
								<div>
									<Tag>
										<FaChalkboardTeacher />
										Vídeo Aula
									</Tag>
									<p>Lorem ipsum dolor sit</p>
								</div>

								<span>05/10/202</span>
							</BoxContent>
						</Box>
					</li>
					<li>
						<Box>
							<BoxContent>
								<div>
									<Tag>
										<CgFileDocument />
										Arquivo
									</Tag>
									<p>Lorem ipsum dolor sit</p>
								</div>

								<span>05/10/202</span>
							</BoxContent>
						</Box>
					</li>
				</Feed>
			</Container>
		</>
	);
};

export default ClassFeed;
