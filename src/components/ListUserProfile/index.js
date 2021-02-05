import React from 'react';
import Avatar from 'react-avatar';

import Box from '../Box';
import Button from '../Button';
import { MainInfos, MobileFooter, Name, Nickname, Tag, SchoolName } from './styles';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import { HiOutlineChatAlt, HiOutlineMail } from 'react-icons/hi';

const UserListProfile = ({ data }) => {
	
	return (
		<Box>
			<MainInfos>
				<Avatar size={150} src= 'https://conteudo.imguol.com.br/c/entretenimento/80/2017/04/25/a-atriz-zoe-saldana-como-neytiri-em-avatar-1493136439818_v2_1920x1200.jpg' name = {data.username} round='5px' maxInitials={2} />
				{console.log(data.profileImage.path)}
				<div className='infos'>
					<div className='row'>
						<Name>{data.fullname}</Name>
						<Tag>{(data.level === "high") ? "Professor Ensino Superior" : "Professor Ensino Médio"}</Tag>
					</div>

					<div className='row'>
						<Nickname>@{data.username}</Nickname>
					</div>

					<div className='row'>
						<Button icon={HiOutlineChatAlt}>Mensagem</Button>
						<Button icon={HiOutlineMail} isGhost>
							Email
						</Button>
					</div>

					<div className='row'>
						<SchoolName>{(!data.institution) ? 'Instituição não informada' : data.institution }</SchoolName>
					</div>
				</div>
			</MainInfos>
			<MobileFooter>
				<div className='buttons'>
					<CopyToClipboard 
						text={"Um texto aqui"}
						onCopy =  {() => 
						console.log(
							'Email copiado para área da transferência'
						)
					}>
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
