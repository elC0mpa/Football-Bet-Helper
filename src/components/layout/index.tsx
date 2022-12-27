import { Layout } from "antd";
import {Content} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import {useState} from "react";

const AppLayout = ({children}: any) => {
	const [collapsed, setCollapsed] = useState(false);
	return <Layout>
		<Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>Sider content</Sider>
		<Layout>
			<Content>{children}</Content>
		</Layout>
		</Layout>
}

export default AppLayout
