import React from "react";
import "./CheckOut.css";
import { Footer } from "../Footer/Footer";
import { Link , useHistory} from "react-router-dom";
import { Product_row_first } from "../Product/Product_row_first";
import { CartProduct } from "../Product/CartProduct";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import NumberFormat from 'react-number-format';
import { Scrollbars } from "react-custom-scrollbars-2";
import { useStateValue } from '../StateProvider';
import { getSubtotal } from '../reducer';

export const CheckOut = () => {
  const [ {cart} , dispatch ] = useStateValue()
  const History = useHistory();

  const proceedtoPay = (e) => {
    e.preventDefault();
    History.push("/payment")
  }
  return (
    <>
      <div className="Home">
        <div className="CheckOutPage">
          <div className="notes">
            <h1>
              Pay faster for all your shopping needs{" "}
              <span>with Amazon Pay balance</span>
            </h1>
            <h2>Get Instant refund on cancellations | Zero payment failures</h2>
          </div>
          


          {/* leftSide */}
          <div className="shopping_carts">
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


            {/* right side */}
            <div className="shooping_cart_right">
              <div className="shooping_banner">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
                  alt=""
                />
              </div>
              <div className="total_info_box">
                <div className="free_delivery_text">
                  <CheckCircleIcon />
                  <p>
                    Your order is eligible for FREE Delivery. Select this option
                    at checkout.{" "}
                    <Link to="https://www.amazon.in/gp/help/customer/display.html?nodeId=200904360&pop-up=1">
                      Details
                    </Link>{" "}
                  </p>
                </div>

                <div className="Subtotal_box">
                    {/* Subtotal part  */}
                    <NumberFormat
                      renderText={(value) => {

                        return (
                          <>
                            <h3>
                              Subtotal ( {cart.length} ) : <span>{value}</span>
                            </h3>
                            <p>
                              <input type="checkbox" name="" id="" />
                              This Order contains a gift
                            </p>
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
                    <button className="btn_proceed" onClick={proceedtoPay} >Proceed to Buy</button>
                    
                    <details className="EMI_btn">
                      <summary>
                        EMI Available
                      </summary>
                      <p>Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up). Learn more</p>
                    </details>
                  </div>
              </div>
            </div>
          </div>
          <Product_row_first />
        </div>
        <Footer />
      </div>
    </>
  );
};
