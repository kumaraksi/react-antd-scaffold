import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;

const SideNavComponent = () => (
	<Sider width={ 200 } style={ { background: '#fff' } }>
		<div className="logo" />
		<Menu
			theme="dark"
			mode="inline"
			defaultSelectedKeys={ [ '1' ] }
			defaultOpenKeys={ [ 'sub1' ] }
			style={ { height: '100%', borderRight: 0 } }
		>
			<Menu.Item key="1"><Link to="/"><span><Icon type="home"/>Home</span></Link></Menu.Item>
			<Menu.Item key="2"><Link to="/about"><span><Icon type="home"/>Home</span></Link></Menu.Item>
			<SubMenu key="sub2" title= { <span><Icon type="laptop" />subnav 2</span> } >
				<Menu.Item key="5">option5</Menu.Item>
				<Menu.Item key="6">option6</Menu.Item>
				<Menu.Item key="7">option7</Menu.Item>
				<Menu.Item key="8">option8</Menu.Item>
			</SubMenu>
		</Menu>
	</Sider>
);

export default SideNavComponent;
