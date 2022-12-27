import styled from "styled-components";

export const LeagueItemContainer = styled.div`
	display: flex;
	padding: 8px 8px 8px 16px;
	gap: 8px;
	align-items: center;
	color: white;
	min-height: 70px;
	cursor: pointer;
	border-radius: 16px;
	background: #001529;
	&.is-selected {
		background: #000047;
	}
`
