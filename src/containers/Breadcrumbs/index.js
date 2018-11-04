import React from 'react';
import { Breadcrumb } from 'antd';

class BreadcrumbContainer extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			breadcrumbItems: [
				{ title: 'Breadcrumb1', link: '/' },
				{ title: 'Breadcrumb2', link: '/' },
				{ title: 'Breadcrumb3', link: '/' },
			],
		}
	}

	render() {
		const breadcrumbItems = this.state.breadcrumbItems.map(breadcrumb => (
			<Breadcrumb.Item key={ breadcrumb.title }> { breadcrumb.title } </Breadcrumb.Item>
		) );
		return (
			<Breadcrumb style= { { margin: '16px 0' } } >
				{ breadcrumbItems }
			</Breadcrumb>
		)
	}
}

export default BreadcrumbContainer;
