import React, { useContext } from 'react';
import './FoodItem.css';
import rating_stars from '../../assets/rating_starts.png';
import add_icon_white from '../../assets/add_icon_white.png';
import remove_icon_red from '../../assets/remove_icon_red.png';
import add_icon_green from '../../assets/add_icon_green.png';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const {
    addToCart,
    removeFromCart,
    itemCart,
  } = useContext(StoreContext);

  const itemCount = itemCart[id] > 0;

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt={name} />
        {!itemCount ? (
          <img
            className='add'
            onClick={() => addToCart(id)}
            src={add_icon_white}
            alt="add"
          />
        ) : (
          <div className="food-item-counter">
            <img onClick={() => removeFromCart(id)} src={remove_icon_red} alt="remove" />
            <p>{itemCart[id]}</p>
            <img onClick={() => addToCart(id)} src={add_icon_green} alt="add" />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={rating_stars} alt="rating" />
        </div>
        <p className="food-item-descript">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
