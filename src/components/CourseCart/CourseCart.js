import React from 'react';
import './CourseCart.css'

const CourseCart = (props) => {
    const cart = props.cart;
    console.log(cart);
    let totalPrice = cart.reduce((total, product) => total + product.price, 0);
    return (
      <div>
            <h5 className="order">Order Summery:</h5>
            <p>Items Ordered:{cart.length}</p>
            <p>Total Price:${totalPrice}</p>
      </div>
    );
};
export default CourseCart;