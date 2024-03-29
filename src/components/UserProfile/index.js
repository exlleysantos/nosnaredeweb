import React from 'react';
import Avatar from 'react-avatar';

import Box from '../Box';
import Button from '../Button';
import { MainInfos, MobileFooter, Name, Nickname, Tag, SchoolName } from './styles';

import { HiOutlineChatAlt, HiOutlineMail } from 'react-icons/hi';

const UserProfile = ({ data }) => {
	const url = process.env.REACT_APP_API_URL;
	return (
		<Box>
			<MainInfos>
				<Avatar size={150} name = {data.fullname} round='5px' maxInitials={2} src={`${url}/images/profilePic-${data.id}`} />

				<div className='infos'>
					<div className='row'>
						<Name> Bem vind@, {data.fullname}</Name>
						<Tag>Prof. 5° ano</Tag>
					</div>

					<div className='row'>
						<Nickname>{data.username}</Nickname>
					</div>

					<div className='row'>
						<Button icon={HiOutlineChatAlt}>Mensagem</Button>
						<Button icon={HiOutlineMail} isGhost>
							Email
						</Button>
					</div>

					<div className='row'>
						<SchoolName>{data.institution}</SchoolName>
					</div>
				</div>
			</MainInfos>
			<MobileFooter>
				<div className='buttons'>
					<Button icon={HiOutlineChatAlt}>Mensagem</Button>
					<Button icon={HiOutlineMail} isGhost>
						Email
					</Button>
				</div>
			</MobileFooter>
		</Box>
	);
};

export default UserProfile;
