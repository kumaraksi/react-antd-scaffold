import React from 'react';
import { Layout } from 'antd';

import PropTypes from 'prop-types'

const SidenavLayout = (props) => {
	const { SideNav, Breadcrumb } = props;

	return (
		<Layout>
			<Layout>
				<SideNav />

				<Layout style={ { padding: '0 24px 24px' } }>

					<Breadcrumb />

					{/* <Content /> */}
				</Layout>
			</Layout>
		</Layout>
	)
};

SidenavLayout.propTypes = {
	Header: PropTypes.func.isRequired,
	SideNav: PropTypes.func.isRequired,
	Breadcrumb: PropTypes.func.isRequired,
}
export default SidenavLayout;
