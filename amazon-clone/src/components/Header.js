import React from "react";
import "../Css/Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom"
import {useStateValue} from '../StateProvider';
import {auth} from '../firebase'



function Header() {

    const [{basket,user},dispatch] = useStateValue();

    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
    }
    
    return (
        <div className="header">
            <Link to="/">

                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    className="header-logo" />
            </Link>

            <div
                className="header-search">
                <input className="header-searchInput" type="text" />
                {/* LOGO */}
                <SearchIcon className="header-search-icon" />
            </div>

            <div className="header-nav">
            <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className="header-option">
                    <span className="header-option-one">Hello Guest</span>
                    <span className="header-option-two">{user?'Sign Out':'Sign In'}</span>
                </div>
                </Link>
                <Link to='/orders'>
                <div className="header-option">
                    <span className="header-option-one">Returns</span>
                    <span className="header-option-two">& Orders</span>
                </div>
                </Link>
                <div className="header-option">
                    <span className="header-option-one">Your</span>
                    <span className="header-option-two">Prime</span>
                </div>
                <div className="header-option-basket">
                    <Link to="/checkout"><ShoppingBasketIcon className="" /></Link>
                    <span className="header-option-two header-basketCount">{basket.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Header;