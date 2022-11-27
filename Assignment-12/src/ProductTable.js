import React, { Component } from 'react'
import ProductRow from './ProductRow';


class ProductTable extends Component {

	constructor(props) {
		super(props);
		this.handleDestroy = this.handleDestroy.bind(this);
	}

	handleDestroy(id) {
		this.props.destroy(id);
	}

	render() {
		const products = Object.keys(this.props.products);
		let rows = [];
		let { filterText } = this.props;

		for (let i = 0; i < products.length; i++) {
			const p = products[i]; 
			const prod = this.props.products[p];
			const name = prod.name.toLowerCase();

			if(filterText && filterText.length > 0 && name.indexOf(filterText) === -1) continue;
			rows.push(<ProductRow key={prod.id} product={prod} onDestroy={this.handleDestroy} />)
		}
		
		return(
			<table className="table table-striped border">
				<thead className="thead-dark">
					<tr>
						<th>Name</th>
						<th>Price</th>
						<th>Category</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		)
	}

}


export default ProductTable;