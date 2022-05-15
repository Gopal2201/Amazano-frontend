import { useContext } from "react";
import cardCtx from "../context";

function CartItem({ item }) {
    const [updateCart, currencyFormatter] = useContext(cardCtx);
    return (
        <>
            <div className="Cart-container">
                <img src={item.img} alt={item.model} className="Cart-Img" />
                <div className="Cart-Item-Details">
                <h2 className="Cart-Name">{item.model}</h2>
                <p className="Cart-Company">{item.company}</p>
                <p className="CartAddRemove"><button onClick={() => updateCart({ item, type: "decrement" })}>-</button>{item.quantity}<button onClick={() => updateCart({ item, type: "increment" })}>+</button></p>
                </div>
                <p className="Cart-Price">{currencyFormatter(item.price)}</p>
            </div>
            <hr />
            </>
    )
}

export default CartItem;