import React from 'react';
import "../Product/products.css"
import { useStateValue } from '../StateProvider';
import { Stars } from '../Product/Stars';
import NumberFormat from 'react-number-format';


export const Product = (props) => {
    const [state, dispatch] = useStateValue()
    
    // console.log(props.star.fill())

    

             
    const addToCart = () => {

        // Dispatch the item into data layer
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id:props.id,
                name: props.name,
                img: props.img,
                brand: props.brand,
                price: props.price,
                subprice: props.subprice
            }
        });
    }

    return (
        <div className="product_card">
            <div className="Product_Img_box">
                <img src={props.img} alt="" className="Product_img"/>
            </div>
            <strong>{ props.name }</strong>
            <h5>{ props.brand }</h5>
            <div className="Price">
            <NumberFormat
                  renderText={(value) => {
                    return (
                      <>
                        <p>{value}</p>
                      </>
                    )
                  }}
                  decimalScale={2}
                  value={props.price}
                  displayType={"text"}
                  thousandsGroupStyle="lakh"
                  thousandSeparator={true}
                  prefix={"₹ "}
            />
                
                <small>₹{props.subprice}</small>
            </div>
            <div className="ratings">
                <Stars stars={ props.star } />
            </div>
            <button className="btn" onClick={addToCart} >Add to Cart</button>
        </div>
    )
}
