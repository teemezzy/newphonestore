import React, { Component } from 'react';
import {} from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer, ModalContainer } from './StyledComponents';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
	render() {
		return (
			<ProductConsumer>
				{value => {
					const { modalOpen, closeModal, modalProduct } = value;
					const { img, title, price } = modalProduct;

					if (!modalOpen) {
						return null;
					} else {
						return (
							<ModalContainer>
								<div className='container'>
									<div className='row'>
										<div
											id='modal'
											className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5'>
											<h5>item added to the cart</h5>
											<img src={img} alt={title} className='img-fluid' />
											<h5>{title}</h5>
											<h5 className='text-muted'>price : $ {price}</h5>
											<Link to='/'>
												<ButtonContainer onClick={() => closeModal()}>
													continue shopping
												</ButtonContainer>
											</Link>
											<Link to='/store'>
												<ButtonContainer yellow onClick={() => closeModal()}>
													view cart
												</ButtonContainer>
											</Link>
										</div>
									</div>
								</div>
							</ModalContainer>
						);
					}
				}}
			</ProductConsumer>
		);
	}
}
