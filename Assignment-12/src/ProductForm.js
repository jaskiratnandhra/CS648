import React, { Component } from "react";

const RESET_VALUES = { id: '', category: '', price: '', name: '' };

class ProductForm extends Component {

	constructor(props) {
		super(props);
		this.handleSave = this.handleSave.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			product: Object.assign({}, RESET_VALUES), errors: {}
		}
	}

	handleSave(e) {
		e.preventDefault();
		this.props.onSave(this.state.product)
		this.setState({
			product: Object.assign({}, RESET_VALUES), errors: {}
		})
	}

	handleChange(e) {
		const target = e.target
		const value = target.value
		const name = target.name
		this.setState((prevState) => {
			prevState.product[name] = value
			return { product: prevState.product }
		})
	}

	render() {
		return (
			<form className="mt-3" onSubmit={this.handleSave}>
				<h3>Add a new product</h3>
				Name <br />
				<input type="text" name="name" id="name" className="form-control col-lg-8" onChange={this.handleChange} value={this.state.product.name} required /> <br />

				Category <br />
				<input type="text" name="category" id="category" className="form-control col-lg-8" onChange={this.handleChange} value={this.state.product.category} required /> <br />

				Price <br />
				<input type="text" name="price" id="price" className="form-control col-lg-8" onChange={this.handleChange} value={this.state.product.price} required /> <br />

				<input type="submit" className="btn btn-primary" value="Save" />
			</form>
		)
	}

}

export default ProductForm;