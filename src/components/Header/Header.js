import React  from 'react'
import amazonLogo from '../imgs/amazonLogo.png'
import "../Header/Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LanguageIcon from '@material-ui/icons/Language';
import { Link , useHistory } from "react-router-dom";
import { useStateValue } from '../StateProvider'
import { auth } from '../firebase';

export const Header = () => {
    const [{ cart, user }, dispatch] = useStateValue();
    
    const History = useHistory()

    const handleSigninout = (e) => {
        e.preventDefault();
        if (user) {
            auth.signOut();
        } 
        History.push("/login");
    }
    return (
        <div className="header" id="header">
            <Link to="/">
                <img src={amazonLogo} alt="" className="Logo"/>
            </Link>
            <div className="header_option">
                <span className="headerOption_LineOne">Helloww</span> <br />
                <span className="headerOption_Linetwo">Select your address</span>
            </div>
            <div className="search_bar">
                <input type="text" className="search" />    
                <SearchIcon className="search_right" />
            </div>
            <div className="header_option">
                <div className="select_language" onClick={handleSigninout}>
                    <LanguageIcon />
                    <span>{ !user? "Sign in" : "Sign Out" }</span>
                </div>
            </div>
            <Link to="/">
                <div className="header_option">
                        <span className="headerOption_LineOne">Hello, {!user? "Guest" : user.email} </span> <br />
                        <span className="headerOption_Linetwo">Account & Lists</span>
                </div>
            </Link>
            <div className="header_option">
                <span className="headerOption_LineOne">Return</span> <br />
                <span className="headerOption_Linetwo">& Order</span>
            </div>
            <div className="header_option">
                <Link to="/checkout" className="Cart_btn">
                    <ShoppingCartIcon className="Cart_ico"/>
                    <span className="cart_count">{cart.length}</span>
                    <span>Cart</span>
                </Link>    
            </div>
        </div>

    )
}
