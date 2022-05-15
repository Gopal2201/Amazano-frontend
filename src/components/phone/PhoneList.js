import { useEffect, useState } from "react";
import Phone from "./onePhone";
import axios from "axios";

import Header from "../header";

function PhoneList() {
    const [mobiles,setMobiles] = useState([]);

    async function getData() {
        const token = localStorage.getItem("token");
        const {data} = await axios.get("http://localhost:4000/categries/mobiles", { headers: {"Authorization" : `Bearer ${token}`} });
        setMobiles(data);
    }

    useEffect(() => {
        getData();  
    }, []);
    return(
        <>
        <Header heading="Phone List"/>
        {mobiles.map((mobile) => <Phone key={mobile._id} item={mobile} />)}
        </>
    )
}

export default PhoneList;