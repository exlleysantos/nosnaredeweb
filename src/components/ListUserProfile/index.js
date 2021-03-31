import React, { useCallback } from 'react';
import Avatar from 'react-avatar';

import Box from '../Box';
import Button from '../Button';
import { MainInfos, MobileFooter, Name, Nickname, Tag, SchoolName } from './styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { HiOutlineChatAlt, HiOutlineMail } from 'react-icons/hi';
//import src from '*.bmp';

const Copy = ({ text, onCopy, children }) => {
	const copyToClipboard = useCallback(
		async (text) => {
			await navigator.clipboard.writeText(text);

			if (typeof onCopy === 'function') {
				return onCopy();
			}
		},
		[text]
	);

	return (
		<React.Fragment>
			{React.cloneElement(children, {
				onClick: () => copyToClipboard(),
			})}
		</React.Fragment>
	);
};

const UserListProfile = ({ data }) => {
	const url = process.env.REACT_APP_API_URL;
	return (
		<Box>
			<MainInfos>
				<Avatar
					size={160}
					src={`${url}/images/profilePic-${data.id}`}
					alt=''
					name={data.username}
					round='5px'
					maxInitials={2}
				/>
				<div className='infos'>
					<div className='row'>
						<Name>{data.fullname}</Name>
						<Tag>
							{data.level === 'high'
								? 'Professor Ensino Superior'
								: 'Professor Ensino Médio'}
						</Tag>
					</div>

					<div className='row'>
						<Nickname>@{data.username}</Nickname>
					</div>

					<div className='row'>
						<Button icon={HiOutlineChatAlt}>Mensagem</Button>
						<Button icon={HiOutlineMail} isGhost>
							Email
						</Button>

						{/* COMPONENTE DE COPIAR AQUI */}
						<Copy text={'XUPADA DIMENSIONAL REVERSA'} onCopy={() => alert('COPIADO')}>
							<Button icon={HiOutlineChatAlt}>Copiar Informação</Button>
						</Copy>
					</div>

					<div className='row'>
						<SchoolName>
							{!data.institution ? 'Instituição não informada' : data.institution}
						</SchoolName>
					</div>
				</div>
			</MainInfos>
			<MobileFooter>
				<div className='buttons'>
					<CopyToClipboard
						text={'Um texto aqui'}
						onCopy={() => console.log('Email copiado para área da transferência')}>
						<Button icon={HiOutlineChatAlt}>Copiar Informação</Button>
					</CopyToClipboard>

					<Button icon={HiOutlineMail} isGhost>
						Email
					</Button>
				</div>
			</MobileFooter>
		</Box>
	);
};

export default UserListProfile;
