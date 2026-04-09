import { useState } from "react";
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
      image: "https://picsum.photos/seed/burger/300/200",
    },
    {
      id: 2,
      name: "Pizza",
      price: 250,
      image: "https://picsum.photos/seed/pizza/300/200",
    },
    {
      id: 3,
      name: "Pasta",
      price: 180,
      image: "https://picsum.photos/seed/pasta/300/200",
    },
    {
      id: 4,
      name: "Fried Rice",
      price: 140,
      image: "https://picsum.photos/seed/friedrice/300/200",
    },
    {
      id: 5,
      name: "Biryani",
      price: 220,
      image: "https://picsum.photos/seed/biryani/300/200",
    },
    {
      id: 6,
      name: "Sandwich",
      price: 90,
      image: "https://picsum.photos/seed/sandwich/300/200",
    },
    {
      id: 7,
      name: "Noodles",
      price: 130,
      image: "https://picsum.photos/seed/noodles/300/200",
    },
    {
      id: 8,
      name: "Ice Cream",
      price: 80,
      image: "https://picsum.photos/seed/icecream/300/200",
    },
    {
      id: 9,
      name: "Dosa",
      price: 60,
      image: "https://picsum.photos/seed/dosa/300/200",
    },
    {
      id: 10,
      name: "Chicken Wings",
      price: 260,
      image: "https://picsum.photos/seed/chicken/300/200",
    },
  ]);
  const [newCart, setNewCart] = useState([]);
  const [toggle, setToggle] = useState(false);
  

  return (
    <>
      <Header 
        title="Shopping Cart"
        cartLength={newCart.length}
        toggle={toggle}
        setToggle={setToggle}
      />
      
      <CartItems 
        cart={cart}
        newCart={newCart}
        setNewCart={setNewCart}
      />

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
