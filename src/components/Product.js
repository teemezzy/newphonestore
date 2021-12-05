import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import { ProductWrapper } from './StyledComponents';
import PropTypes from 'prop-types';

export default class Product extends Component {
	render() {
		const { id, img, title, price, inCart } = this.props.product;
		return (
			<ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
				{/* Product card */}
				<div className='card'>
					{/* Card body */}
					<ProductConsumer>
						{value => (
							<div
								className='img-container p-5'
								onClick={() => {
									value.handleDetail(id);
								}}>
								<Link to='/details'>
									<img src={img} alt={title} className='card-img-top' />
								</Link>
								<button
									className='cart-btn'
									disabled={inCart ? true : false}
									onClick={() => {
										value.addToCart(id);
										value.openModal(id);
									}}>
									{inCart ? (
										<p className='text-capitalize mb-0' disabled>
											added to cart
										</p>
									) : (
										<i className='fas fa-cart-plus'></i>
									)}
								</button>
							</div>
						)}
					</ProductConsumer>
					{/* card footer */}
					<div className='card-footer d-flex justify-content-between'>
						<p className='align-self-center mb-0'>{title}</p>
						<h5 className='text-blue font-italic mb-0'>
							<span className='mr-1'>$</span>
							{price}
						</h5>
					</div>
				</div>
			</ProductWrapper>
		);
	}
}

Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		img: PropTypes.string,
		title: PropTypes.string,
		price: PropTypes.number,
		inCart: PropTypes.bool
	}).isRequired
};
