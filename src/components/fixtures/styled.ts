import styled from "styled-components";
import {colors} from "../../styles/colors";

export const FixturesContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`

export const FixtureItemContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 10px;
	border: 2px solid ${colors.secondary};
	padding: 8px;
	border-radius: 8px;
`

export const FixtureTeamsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`

export const FixtureActionsContainer = styled(FixtureTeamsContainer)`
	font-size: 20px;
`

export const VersusStyled = styled.span`
	color: ${colors.secondary};
	font-size: 20px;
	font-weight: bold;
`

export const StyledDateSpan = styled.span`
	//margin-left: auto;
`
