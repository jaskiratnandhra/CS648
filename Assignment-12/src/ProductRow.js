import React, { Component } from 'react'


class ProductRow extends Component {

	constructor(props) {
		super(props);
		this.destroy = this.destroy.bind(this);
	}

	destroy() {
		this.props.onDestroy(this.props.product.id);
	}

	render() {
		const { product } = this.props;

		return(
			<tr>
				<td>{product.name}</td>
				<td>{product.price}</td>
				<td>{product.category}</td>
				<td className="text-right"><button className="btn btn-primary" id={product.id} onClick={this.destroy}>Delete</button></td>
			</tr>
		)
	}

}


export default ProductRow;