import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { StoreContext } from '../../Context/StoreContext';
import './Placeorder.css';

const Placeorder = () => {
  const navigate = useNavigate();
  const { getTotalCartAmount, food_list, itemCart } = useContext(StoreContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async () => {
    const orderItems = food_list
      .filter(item => itemCart[item._id] > 0)
      .map(item => ({
        price: item.price,
        productName: item.name,
        quantity: itemCart[item._id]
      }));

    try {
      for (const item of orderItems) {
        const payload = {
          ...formData,
          ...item
        };
        await axios.post('http://localhost:8080/products/', payload);
      }

      alert("Order Placed Successfully");
      navigate('/');
    } catch (err) {
      console.error('Order submission failed:', err);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <form className='place-order' onSubmit={(e) => e.preventDefault()}>
      <div className="place-order-left">
        <p className="title">Delivery information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' name="firstName" onChange={handleChange} />
          <input type="text" placeholder='Last Name' name="lastName" onChange={handleChange} />
        </div>
        <input type="text" placeholder='Email address' name="email" onChange={handleChange} />
        <input type="text" placeholder='Street' name="street" onChange={handleChange} />
        <div className="multi-fields">
          <input type="text" placeholder='City' name="city" onChange={handleChange} />
          <input type="text" placeholder='State' name="state" onChange={handleChange} />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' name="zip" onChange={handleChange} />
          <input type="text" placeholder='Country' name="country" onChange={handleChange} />
        </div>
        <input type="text" placeholder='Phone' name="phone" onChange={handleChange} />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type="button" onClick={handleSubmit}>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
