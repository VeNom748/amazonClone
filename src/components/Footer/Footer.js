import React  from 'react';
import "./Footer.css"
import LanguageIcon from '@material-ui/icons/Language';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom';

export const Footer = (props) => {

    let For_Home;

    if (props.Home === true) {
        For_Home = {
            position: "absolute",
            bottom:"-340px"
        }
    } else {
        For_Home = {
            position: "relative",
        }
    }

    return (
        <div className="Footer" style={For_Home}>
            <div className="back_to_top_btn" >
                <Link to="#main">Back to Top</Link>
            </div>
            <div className="footer_row_first">
                <div className="footer_column">
                    <ul>
                        <strong>Get to know us</strong>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Press Releases</li>
                        <li>Amazon Cares</li>
                        <li>Gift a smile</li>
                    </ul>
                </div>
                <div className="footer_column">
                    <ul>
                        <strong>Connect with Us</strong>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div className="footer_column">
                    <ul>
                        <strong>Make Money with Us</strong>
                        <li>Sell on Amazon</li>
                        <li>Sell Under Amazon Acceleration</li>
                        <li>Amazon Globel Selling</li>
                        <li>Become a Affilate</li>
                        <li>Fullfillment by Amazon</li>
                        <li>Advertise Your Product</li>
                        <li>Amazon Pay on Marchants</li>
                    </ul>
                </div>
                <div className="footer_column">
                    <ul>
                        <strong>Let us Help You</strong>
                        <li>COVID-19 and Amazon</li>
                        <li>Your Account</li>
                        <li>Return's Center</li>
                        <li>100% Purches Protection</li>
                        <li>Amazon App Download</li>
                        <li>Amazon Assistant Download</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
            <div className="hr_line"></div>
            <div className="footer_row_second">
                <img src="http://localhost:3000/static/media/amazonLogo.1c9be0b2.png" className="Logo" alt="" />
                <div className="Language_button">
                    <LanguageIcon />
                    <p>English</p>
                    <div className="up_down">
                        <ArrowDropUpIcon />
                        <ArrowDropDownIcon />
                    </div>
                </div>
            </div>
            <div className="footer_row_first">
                <ul className="cuntries">
                    <li>Austrslia</li>
                    <li>Brazil</li>
                    <li>Caneda</li>
                    <li>Chaina</li>
                    <li>France</li>
                    <li>Germany</li>
                    <li>Italy</li>
                    <li>Japan</li>
                    <li>Mexico</li>
                    <li>Netherland</li>
                    <li>Poland</li>
                    <li>Singapur</li>
                    <li>Spain</li>
                    <li>Turky</li>
                    <li>United Arab Emirates</li>
                    <li>United Kingdom</li>
                    <li>United State</li>
                    <li>India</li>
                </ul>
            </div>
            <div className="footer_end">
                
                <ul>
                    <li>Conditions of Use and Sell</li>
                    <li>Privacy Notice</li>
                    <li>Interest Based Ads</li>
                    <li>&copy; 1996-2021, Amazon.com,inc, or its affilates</li>
                </ul>
            </div>
        </div>
    )
}
