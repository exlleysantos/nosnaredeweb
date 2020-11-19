import React, { useRef } from 'react';
import Recdal from 'recdal';
import { Link } from 'react-router-dom';

import Box from '../../components/Box';
import { H1 } from '../../components/Typography';
import Button from '../../components/Button';
import { Container, ModalContent, Option, Options, Feed, BoxContent, Tag } from './styles';

import { AiOutlineLink } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const Forum = () => {
	const modalRef = useRef(null);

	return (
		<>
			<Container>
				<header>
					<H1>Seus Compartilhamentos</H1>
					<Button onClick={() => modalRef.current.open()}>Novo Compartilhamento</Button>
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

			<Recdal ref={modalRef}>
				<ModalContent>
					<header>
						<h3>Novo Compartilhamento</h3>

						<button onClick={() => modalRef.current.close()}>
							<IoMdClose />
						</button>
					</header>

					<div>
						<Options>
							<Link to='/continuous-formation/courses/create'>
								<Option>
									<AiOutlineLink /> Links
								</Option>
							</Link>
							<Link to='/continuous-formation/video/create'>
								<Option>
									<FaChalkboardTeacher />
									Vídeo Aulas
								</Option>
							</Link>
							<Link to='/continuous-formation/files/create'>
								<Option>
									<CgFileDocument />
									Arquivos
								</Option>
							</Link>
						</Options>
					</div>
				</ModalContent>
			</Recdal>
		</>
	);
};

export default Forum;
