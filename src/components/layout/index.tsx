import { Layout } from "antd";
import {Content} from "antd/es/layout/layout";
import {useState} from "react";
import SiderCotent from "./SiderContent";
import {StyledGeneralLayout, StyledSider} from "./styled";

const AppLayout = ({children}: any) => {
	const [collapsed, setCollapsed] = useState(false);
	return <StyledGeneralLayout>
		<StyledSider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}><SiderCotent/></StyledSider>
		<Layout>
			<Content>{children}</Content>
		</Layout>
	</StyledGeneralLayout>
}

export default AppLayout
