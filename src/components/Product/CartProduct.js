import React from 'react'
import "./products.css"
import NumberFormat from 'react-number-format';
import { useStateValue } from '../StateProvider';

export const CartProduct = (props) => {
    const [{cart} , dispatch] = useStateValue()
    
    const RemoveFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id:props.id
        })
    }
    return (
        <>
            <div className="cart_product_card">
                <input type="checkbox" name="checkCart" id="" checked/>
                <div className="cart_product_img">
                    <img src={ props.img } alt="" />
                </div>
                <div className="cart_product_info">
                    <ul>
                        <li>{ props.name }</li>
                        <li>In stock</li>
                        <li>Eligible for FREE Shipping</li>
                        <li><img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="" /></li>
                        <li><input type="checkbox" name="" id="" /> This will be a giftThis is a gift. Learn more</li>  
                    </ul>
                    <div className="Product_Quantity">
                        <select name="Quantity" id="" className="quantity">
                            <option value="">Qty: 1</option>
                            <option value="">Qty: 2</option>
                            <option value="">Qty: 3</option>
                            <option value="">Qty: 4</option>
                            <option value="">0 (Delete)</option>
                        </select>
                        <ul>
                            <li onClick={RemoveFromCart} >Delete</li>
                            <li>Save for later</li>
                            <li>See more like this</li>
                        </ul>
                    </div>
                </div>
                <div className="cart_price">
                <NumberFormat
                  renderText={(value) => {
                    return (
                      <>
                        <h3>{ value }</h3>
                      </>
                    )
                  }}
                  decimalScale={2}
                  value={ props.price }
                  displayType={"text"}
                  thousandsGroupStyle="lakh"
                  thousandSeparator={true}
                  prefix={"₹ "}
                />  
                </div>
            </div>
            <div className="hr_line2"></div>

        </>
    )
}
