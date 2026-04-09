import React from 'react'

const CartItems = ({ cart, newCart, setNewCart }) => {
  const handleAddCart = (item) => {
    const id = newCart.length ? newCart[newCart.length - 1].id + 1 : 1;
    const addNewCart = {
      id,
      name: item?.name,
      image: item?.image,
      price: item?.price
    }

    setNewCart([...newCart, addNewCart]);
  }
  
  return (
    <ul className='carts-container'>{
        cart.map((carts) => (
            <li key={carts.id}>
                <div className="food-cart-section">
                    <div className="cart-image-section">
                        <img src={carts.image} alt="" />
                    </div>

                    <div className="cart-food-name">
                        <h2>{carts.name}</h2>
                        <h2>${carts.price}</h2>
                    </div>

                    <div className="cart-add-items">
                        <button className='add-cart-btn' onClick={() => handleAddCart(carts)}>Add Cart</button>
                    </div>
                </div>
            </li>
        ))
    }</ul>
  )
}

export default CartItems