import { useContext, useState } from "react";
import cardCtx from "../context";
function ProductItem({ item, deletePost, editPost }) {
    const [cart, updateCart, currencyFormatter] = useContext(cardCtx);

    return (
        <>
            <div className="Phone-container">
                <img src={item.img} alt={item.model} className="Phone-Img" />
                <h2 className="Phone-Name">{item.model}</h2>
                <p className="Phone-Company">{item.company}</p>
                <p className="Phone-Price">{currencyFormatter(item.price)}</p>
                <button onClick={() => editPost(item)}>Edit</button>
                <button onClick={() => deletePost(item._id)}>Delete</button>
            </div>
        </>
    )
}

export default ProductItem;