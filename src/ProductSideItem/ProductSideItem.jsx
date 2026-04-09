import React from "react";
import { BiTrashAlt } from "react-icons/bi";

const ProductSideItem = ({ newCart, toggle, setToggle, setNewCart }) => {
  const handleToggle = () => setToggle(!toggle);

  const handleDelete = (id) => {
    const deleteCart = newCart.filter((cart) => cart.id !== id);
    setNewCart(deleteCart);
  };

  const handleTotalValue = newCart.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);
  
  return (
    <section
      className={toggle ? "product-side-items" : "product-side-items-appear"}
    >
      <div className="header-section">
        <h2>Product Items</h2>
        <button className="close-btn" onClick={() => handleToggle()}>
          X
        </button>
      </div>

      {newCart.length ? (
        <ul className="item-carts">
          {newCart.map((newCarts) => (
            <li key={newCarts.id} className="products-added-cart">
              <div className="image-sections">
                <img src={newCarts.image} alt={newCarts.name} />
              </div>
              <div className="carts-name">
                <p style={{ color: "#fff" }}>{newCarts.name}</p>
              </div>
              <div className="carts-price">
                <p style={{ color: "#fff" }}>${newCarts.price}</p>
              </div>

              <div className="delete-cart">
                <BiTrashAlt
                  className="delete"
                  onClick={() => handleDelete(newCarts.id)}
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div
          style={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.1rem",
            color: "#fff",
          }}
        >
          Items Not Found.
        </div>
      )}

      <div className="total-cart">
        <h3 className="total">Total</h3>
        <h3 className="overall-total">${handleTotalValue.toFixed(2)}</h3>
      </div>
    </section>
  );
};

export default ProductSideItem;
