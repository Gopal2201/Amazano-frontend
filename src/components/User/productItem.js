import { useContext, useState } from "react";
import cardCtx from "../context";
import Button from '@mui/material/Button';

import "../CSS/ProductMainPage.css";

function ProductItem({ item }) {
    const [cart, updateCart, currencyFormatter] = useContext(cardCtx);

    return (
        <>
            <div className="Product-container">
            <div className="Product-Details">
                <button className="Img-Button">
                <img src={item.img} alt={item.model} className="Product-Img" />
                <h2 className="Product-Name">{item.model}</h2> </button>
                <p className="Product-Company">{item.company}</p>
                <p className="Product-Price">{currencyFormatter(item.price)}</p>
                </div>
                <Button variant="outlined" className="Add-To-Cart-Button" onClick={() => updateCart({item, type:"increment"})}>Add to Cart</Button>
            </div>
        </>
    )
}

export default ProductItem;