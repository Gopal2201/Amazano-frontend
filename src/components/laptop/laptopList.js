import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../header";
import Laptop from "./laptopItem";

function LaptopList() {
    const [laptops,setLaptop] = useState([]);

    async function getData() {
        const token = localStorage.getItem("token");
        const {data} = await axios.get("http://localhost:4000/categries/laptops", { headers: {"Authorization" : `Bearer ${token}`} });
        setLaptop(data);
    }

    useEffect(() => {
        getData();  
    }, []);
    return(
        <>
        <Header heading="Laptop List"/>
        {laptops.map((laptop) => <Laptop key={laptop._id} item={laptop} />)}
        </>
    )
}

export default LaptopList;