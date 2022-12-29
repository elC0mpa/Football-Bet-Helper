import styled from "styled-components";

export const TeamVisualizerContainer = styled.div`
	display: flex;
	gap: 16px;
	> span {
		width: 90px;
	}
	&.is-reverse {
		flex-direction: row-reverse;
	> span {
			text-align: right;
		}
	}
`
