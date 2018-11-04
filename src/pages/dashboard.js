import React from 'react'

import Breadcrumb from '../containers/Breadcrumbs';

import SidenavLayout from '../layouts/SidenavLayout';
import SideNav from '../components/SideNav';

const Dashboard = () => (
	<SidenavLayout
		SideNav = { SideNav }
		Breadcrumb = { Breadcrumb }
		// Content = { Content }
	/>
);

export default Dashboard;
