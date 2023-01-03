import styled from "styled-components";
import {colors} from "../../styles/colors";

export const ComparisonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`

export const ComparisonBarContainer = styled.div`
	display: flex;
	flex-direction: column;
`

export const ProgressContainers = styled.div`
	display: flex;
`

export const ComparisonBarTitle = styled.span`
	text-align: center;
`

export const TeamColorContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`

export const TeamColorsContainer = styled(TeamColorContainer)`
`

export const TeamColorBox = styled.div`
	height: 30px;
	width: 30px;
	background: ${colors.homeBox};
	border-radius: 8px;
	&.is-away {
		background: ${colors.awayBox};
	}
`
