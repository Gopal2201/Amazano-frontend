import { useContext } from "react";
import cardCtx from "../context";
function Laptop({item}) {
    const [cart, updateCart, currencyFormatter] = useContext(cardCtx);

    return (
        <div className="Phone-container">
            <img src={item.img} alt={item.model} className="Phone-Img" />
            <h2 className="Phone-Name">{item.model}</h2>
            <p className="Phone-Company">{item.company}</p>
            <p className="Phone-Price">{currencyFormatter(item.price)}</p>
            <button onClick={() => updateCart({item, type:"increment"})}>Add to Cart</button>
        </div>
    )
}

export default Laptop;