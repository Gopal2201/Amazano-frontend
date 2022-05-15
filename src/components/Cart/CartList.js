import { useContext} from "react";
import cardCtx from "../context";
import Header from "../header";
import CartItem from "./CartItem";

import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "../CSS/CheckOutCartPage.css"

function CartList() {
    const [cart, currencyFormatter] = useContext(cardCtx);
    const total = cart.map((item) => item.quantity * item.price).reduce((sum, item) => sum + item, 0);
    const cartQty = cart.reduce((sum, item) => item.quantity + sum, 0);
    return (
        <>
            <Header heading="CheckOut" />
            <div className="Main-cart">
                <div className="Main-Total-Cart">
                    <div className="Total-Cart">
                        <div className="Cart-Heading">
                            <h2 className="Shopping-Cart">Shopping Cart</h2>
                            <div className="dummy-price">Price</div>
                        </div>
                        <hr />
                        {cart.map((item) => <CartItem key={item._id} item={item} />)}
                        <div className="TotalAmtOnCart">
                            <p className="SubTotal">Subtotal ({cartQty} Items) : {currencyFormatter(total)} </p>
                        </div>
                    </div>
                    <div className="Amazon-Disclimar">
                        The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary
                        place to store a list of your items and reflects each item's most recent price.

                        Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.
                    </div>
                </div>
                <div className="side-Cart">
                    <div className="Side-Top">
                        <div className="Free-Delivery-content">Your order is eligible for FREE Delivery. Select this option at
                            checkout</div>
                        <p className="Side-SubTotal">Subtotal ({cartQty} Items) : {currencyFormatter(total)} </p>
                        <button className="Proceed-to-Buy-Button">Proceed To Buy</button>
                        <span id="EMI-Option">
                            <Accordion style={{"width":"200px"}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>EMI Available</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </span>
                    </div>
                    <div className="Side-bottom">
                        <button className="Side-Card-Redirection"><img src="https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg" className="Side-Card-Redirection-Img" alt="Mobiles"/>
                            <p>Mobile</p>
                        </button>
                        <button className="Side-Card-Redirection"><img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80" className="Side-Card-Redirection-Img" alt="Laptops"/>
                            <p>Laptop</p>
                        </button>
                        <button className="Side-Card-Redirection"><img src="https://m.media-amazon.com/images/I/81rFvuvqaNL._SL1500_.jpg" className="Side-Card-Redirection-Img" alt="Television"/>
                            <p>Television</p>
                        </button>
                        <button className="Side-Card-Redirection"><img src="https://m.media-amazon.com/images/I/71wslpNyYpL._SL1500_.jpg" className="Side-Card-Redirection-Img" alt="Headset"/>
                            <p>Headset</p>
                        </button>
                    </div>
                </div>
            </div>
            <button className="Back-Home-Button">Back to Home</button>
        </>
    )
}

export default CartList;