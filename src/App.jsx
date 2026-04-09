import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import CartItems from "./CartItems/CartItems";
import ProductSideItem from "./ProductSideItem/ProductSideItem";

function App() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Burger",
      price: 120,
      image: "https://foodish-api.com/images/burger/burger4.jpg",
    },
    {
      id: 2,
      name: "Pizza",
      price: 250,
      image: "https://foodish-api.com/images/pizza/pizza1.jpg",
    },
    {
      id: 3,
      name: "Pasta",
      price: 180,
      image: "https://foodish-api.com/images/pasta/pasta1.jpg",
    },
    {
      id: 4,
      name: "Fried Rice",
      price: 140,
      image: "https://foodish-api.com/images/rice/rice9.jpg",
    },
    {
      id: 5,
      name: "Biryani",
      price: 220,
      image: "https://foodish-api.com/images/biryani/biryani1.jpg",
    },
    {
      id: 6,
      name: "Samosa",
      price: 90,
      image: "https://foodish-api.com/images/samosa/samosa1.jpg",
    },
    {
      id: 7,
      name: "Noodles",
      price: 130,
      image: "https://foodish-api.com/images/pasta/pasta2.jpg",
    },
    {
      id: 8,
      name: "Butter Chicken",
      price: 80,
      image: "https://foodish-api.com/images/butter-chicken/butter-chicken14.jpg",
    },
    {
      id: 9,
      name: "Dosa",
      price: 60,
      image: "https://foodish-api.com/images/dosa/dosa1.jpg",
    }
  ]);
  const [newCart, setNewCart] = useState(
    JSON.parse(localStorage.getItem("List-Items")) || [],
  );
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    localStorage.setItem("List-Items", JSON.stringify(newCart));
  }, [newCart]);

  return (
    <>
      <Header
        title="Shopping Cart"
        cartLength={newCart.length}
        toggle={toggle}
        setToggle={setToggle}
      />

      <CartItems cart={cart} newCart={newCart} setNewCart={setNewCart} />

      <ProductSideItem
        toggle={toggle}
        setToggle={setToggle}
        newCart={newCart}
        setNewCart={setNewCart}
      />
    </>
  );
}

export default App;
