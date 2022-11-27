import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Products from './Products';


class App extends Component {

	render() {
		return(
			<Products />
		)
	}

}


ReactDOM.render(<App />, document.getElementById('root'));