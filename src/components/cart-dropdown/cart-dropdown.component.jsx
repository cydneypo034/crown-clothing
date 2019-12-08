import React from 'react';
import CartItem from '../cart-item/cart-item.component'
import {connect} from 'react-redux';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

import {createStructuredSelector} from 'reselect';

import {selectCartItems} from '../../redux/cart/cart.selectors';

const Cart = ( { cartItems } ) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
    {
        cartItems.length ?
        cartItems.map(cartItem => 
        <CartItem key={cartItem.id} item={cartItem} />)
        : 
        <span className='empty-message'>YOUR CART IS EMPTY!</span>
    }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(Cart);