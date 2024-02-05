import React, { useContext } from 'react'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ThemeSwitchWithIcon from '../theme/ThemeSwitchWithIcon';
import Search from '../compoments/search/Search';

// import { CartContext } from '../contexts/CartContext';

export default function Nav() {
    // const {items} = useContext(CartContext)

    // Use useSelector to access the cart state from Redux
    const cartItems = useSelector((state) => state.cart.items);

    // console.log(cartItems);

    // console.log(items)
    return (
        <header style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', maxWidth: '1200px', margin: 'auto' }}>

            <Link to="/" style={{color: 'inherit'}}>
                <h2>Aid Shop</h2>
            </Link>

            <Search />

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <ThemeSwitchWithIcon />

                <Link to="/cart" style={{ color: 'inherit' }}>
                    <LocalMallOutlinedIcon />
                    <span>{cartItems.length}</span>
                </Link>
            </div>
        </header>
    )
}
