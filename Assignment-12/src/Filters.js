import React, { Component } from 'react'


class Filters extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const value = e.target.value
		const name = e.target.name
		this.props.onFilter({
			[name]: value
		});
	}

	render() {
		return (
			<input type="text" placeholder="Search" name="filterText" className="w-100 form-control my-3" onChange={this.handleChange} autoComplete="off" />
		)
	}

}


export default Filters;