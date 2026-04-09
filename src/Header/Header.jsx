import React from 'react'
import { BiCart } from 'react-icons/bi'

const Header = ({ title, cartLength, toggle, setToggle }) => {
  const handleToggle = () => setToggle(!toggle);
  return (
    <nav className='nav-container'>
        <h2 className='header-section'>{title}</h2>
        <div className='btn-container'>
            <button className='cart-add' onClick={() => handleToggle()}>{cartLength}
            <BiCart 
                role='button'
                className='cart'
                size={43}
            />
            </button>
        </div>
    </nav>
  )
}

export default Header