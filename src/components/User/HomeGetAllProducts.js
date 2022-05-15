import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Header from "../header";
import ProductItem from "./productItem";
import cardCtx from "../context";

import "../CSS/ProductMainPage.css";

function GetProductsByUser() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useContext(cardCtx);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            (async () => {
                const { data } = await axios.get("https://ecomm-app-backend-demo.herokuapp.com/users/getproducts");
                setProducts(data);
                const response = await axios.get("https://ecomm-app-backend-demo.herokuapp.com/users/carts/get", { headers: { "Authorization": `Bearer ${token}` } });
                setCart(response.data);
            })();
        } else {
            (async () => {
                console.log("call")
                const { data } = await axios.get("https://ecomm-app-backend-demo.herokuapp.com/users/getproducts");
                console.log(data)
                setProducts(data);
            })();
        }
    }, []);

    return (
        <>
            <div className="Main-Container">
                {products.map((product) => <ProductItem key={product._id} item={product} />)}
            </div>
        </>
    )
}

export default GetProductsByUser;