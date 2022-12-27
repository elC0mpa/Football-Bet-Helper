import Layout from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import styled from "styled-components";
import {colors} from "../../styles/colors";

export const StyledGeneralLayout = styled(Layout)`
	gap: 10px;
	background: white;
`

export const StyledSider = styled(Sider)`
	border-radius: 16px;
`

export const SiderCotentContainer = styled.div`
	padding-top: 20px;
	padding-bottom: 20px;
	display: flex;
	flex-direction: column;
	gap: 8px;
`

export const MainContentContainer = styled.div`
	border-radius: 16px;
	padding: 16px;
	background: ${colors.primary};
	height: 100%;
	color: white;
`
