import styled from "styled-components";
import {colors} from "../../styles/colors";

export const TeamVisualizerContainer = styled.div`
	display: flex;
	gap: 16px;
	align-items: center;
	> span {
		width: 90px;
		&.is-highlighted {
			font-weight: bold;
		}
	}
	&.is-reverse {
		flex-direction: row-reverse;
	> span {
			text-align: right;
		}
	}
`

export const Score = styled.div`
	padding: 8px 4px;
	background: ${colors.secondary};
	color: white;
	border-radius: 8px;
`
