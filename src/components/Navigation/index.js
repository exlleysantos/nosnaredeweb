import React, { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import { Link, useLocation } from 'react-router-dom';
import { Collapse } from 'react-collapse';

import {
	Container,
	PicContainer,
	Menu,
	LinkItem,
	Forums,
	Forum,
	Overlay,
	ToggleMenu,
	collapseTheme,
} from './styles';

import { CgProfile } from 'react-icons/cg';
import { AiOutlinePlayCircle, AiOutlineLogout, AiOutlineClose } from 'react-icons/ai';
import { HiOutlineChatAlt } from 'react-icons/hi';
import { GoBook } from 'react-icons/go';
import { FiShare2 } from 'react-icons/fi';
import { BiChevronDown } from 'react-icons/bi';

const Navigation = ({ showMenu, handleCloseMenu }) => {
	const userData = localStorage.getItem('@USER');
	const data = JSON.parse(userData);
	const { pathname } = useLocation();

	const [showOverlay, setShowOverlay] = useState(false);
	const [showContinuous, setShowContinuous] = useState(() => {
		return pathname.includes('continuous-formation') ? true : false;
	});
	const [showForums, setShowForums] = useState(() => {
		return pathname.includes('forums') ? true : false;
	});

	useEffect(() => {
		if (showMenu) {
			setTimeout(() => {
				setShowOverlay(true);
			}, 250);
		}

		setShowOverlay(false);
	}, [showMenu]);

	return (
		<>
			<Container show={showMenu}>
				<ToggleMenu onClick={handleCloseMenu}>
					<AiOutlineClose />
				</ToggleMenu>

				<PicContainer>
					<Avatar round='5px' name = {data.fullname} />
					<div>
						<p>{data.fullname}</p>
						<span>{data.username}</span>
					</div>
				</PicContainer>

				<Menu>
					<Link to={{ pathname: '/profile', state: { from: pathname } }}>
						<LinkItem active={pathname.includes('profile')}>
							<CgProfile /> Meu espaço
						</LinkItem>
					</Link>

					<Link to={{ pathname: '/educators', state: { from: pathname } }}>
						<LinkItem active={pathname.includes('educator')}>
							<GoBook /> Educadores em Rede
						</LinkItem>
					</Link>

					<LinkItem
						onClick={() => setShowContinuous(!showContinuous)}
						active={pathname.includes('continuous-formation')}>
						<AiOutlinePlayCircle /> Formação continuada
						<BiChevronDown className={`${showContinuous ? 'rotate' : ''} chevron`} />
					</LinkItem>

					<Collapse isOpened={showContinuous} theme={collapseTheme}>
						<Forums>
							<Link to='/continuous-formation/courses'>
								<Forum>Cursos</Forum>
							</Link>
							<Link to='/continuous-formation/class'>
								<Forum>Vídeo Aulas</Forum>
							</Link>
							<Link to='/continuous-formation/docs'>
								<Forum>Arquivos</Forum>
							</Link>
						</Forums>
					</Collapse>

					<LinkItem
						onClick={() => setShowForums(!showForums)}
						active={pathname.includes('forums')}>
						<HiOutlineChatAlt /> Vamos conversar
						<BiChevronDown className={`${showForums ? 'rotate' : ''} chevron`} />
					</LinkItem>

					<Collapse isOpened={showForums} theme={collapseTheme}>
						<Forums>
							<Link to={{ pathname: '/forums/', state: { from: pathname } }}>
								<Forum>Início</Forum>
							</Link>
							<Link to={{ pathname: '/forums/', state: { from: pathname } }}>
								<Forum>Eu tenho uma dúvida</Forum>
							</Link>
							<Link to={{ pathname: '/forums/', state: { from: pathname } }}>
								<Forum>Foi uma experiência prazerosa</Forum>
							</Link>
							<Link to={{ pathname: '/forums/', state: { from: pathname } }}>
								<Forum>Curiosidades sobre TDIC</Forum>
							</Link>
						</Forums>
					</Collapse>

					<Link to={{ pathname: '/share', state: { from: pathname } }}>
						<LinkItem active={pathname.includes('share')}>
							<FiShare2 /> Compartilhe
						</LinkItem>
					</Link>

					<LinkItem>
						<AiOutlineLogout /> Sair
					</LinkItem>
				</Menu>
			</Container>

			<Overlay visible={showOverlay} onClick={handleCloseMenu} />
		</>
	);
};

export default Navigation;
