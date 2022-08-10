import React from 'react'
import { Footer } from '../Footer/Footer';
import "./payment.css"
import NumberFormat from 'react-number-format';
import "../CheckOut/CheckOut.css"
import { Scrollbars } from "react-custom-scrollbars-2";
import { CartProduct } from "../Product/CartProduct";
import { useStateValue } from '../StateProvider';
import { Link , useHistory } from 'react-router-dom';
import { getSubtotal } from '../reducer';

export const Payment = () => {
    const [{ cart }, dispatch] = useStateValue();
    const History = useHistory();
    const OrderPlaced = (e) => {
        e.preventDefault();
        History.push("/orderplaced")
        }
    return (
        <div className="Home">
            <div className="w_80">
                <Scrollbars
                style={{
                    width: "67vw",
                    height: "600px",
                    backgroundColor: "#fff",
                }}
                >
                <div className="shooping_cart_left">
                    <h1>Shooping Cart</h1>
                    <Link to="">Deselect all items</Link>
                    <div className="hr_line2">Price</div>
                    
                    <div>
                    {
                        cart.map(item => {
                        return (
                            <CartProduct
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            img={item.img}
                            />
                            )
                        })
                        }

                    </div>
                </div>
                </Scrollbars>
                <div className="Subtotal_box" >
                    {/* Subtotal part  */}
                    <NumberFormat
                      renderText={(value) => {

                        return (
                          <>
                            <h3>
                              Subtotal ( {cart.length} ) : <span>{value}</span>
                            </h3>
                          </>
                        )
                      }}
                      decimalScale={2}
                      value={getSubtotal(cart)}
                      displayType={"text"}
                      thousandsGroupStyle="lakh"
                      thousandSeparator={true}
                      prefix={"₹ "}
                    />
                  </div>
                <h1 className="pheading">Please Complete The Payment</h1>
                <div className="cardInfo">
                    <NumberFormat format="#### #### #### ####" mask="_" className="card_input card_no" placeholder="Card Number" />
                    <div>
                        <NumberFormat format="##/##" placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']} className="card_input card_valid"/>
                        <NumberFormat format="###" className="card_input card_cvv" placeholder="cvv" />
                    </div>
                    <button className="btn_proceed" onClick={OrderPlaced}>Click Here to Pay</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
