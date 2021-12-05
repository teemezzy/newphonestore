import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/cart';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import Modal from './components/Modal';

function App() {
	return (
		<Fragment>
			<Navbar />
			<Switch>
				<Route exact path='/' component={ProductList} />
				<Route exact path='/details' component={Details} />
				<Route exact path='/store' component={Cart} />
				<Route component={Default} />
			</Switch>
			<Modal />
		</Fragment>
	);
}

export default App;
