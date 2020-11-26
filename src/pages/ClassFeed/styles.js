import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;

	& > header {
		width: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}
`;

export const Feed = styled.ul`
	width: 100%;
	margin-top: 24px;

	& > li {
		margin-bottom: 12px;
	}
`;

export const Tag = styled.div`
	background: #c4c4c4;
	font-size: 13px;
	color: var(--heading-1);
	border-radius: 4px;
	padding: 4px 8px;
	margin-right: 12px;
	display: flex;
	align-items: center;

	& > svg {
		font-size: 18px;
		margin-right: 4px;
	}
`;

export const BoxContent = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	& > span {
		font-size: 13px;
		font-weight: 400;
		color: var(--body-1);
	}

	& > div {
		display: flex;

		& > p {
			font-size: 15px;
			color: var(--body-1);
		}
	}
`;
