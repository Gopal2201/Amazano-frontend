import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header";
import ProductItem from "./productItem";

function GetProducts() {
    const [products, setProducts] = useState([]);

    const [img, setImg] = useState("");
    const [model, setModel] = useState("");
    const [company, setCompany] = useState("");
    const [price, setPrice] = useState("");
    const [id, setId] = useState("");
    const [category, setCategory] = useState("");

    async function getData() {
        const { data } = await axios.get("http://localhost:4000/admin/getproducts");
        setProducts(data);
    }

    useEffect(() => {
        getData();
    }, []);

    const editPost = (item) => {
        setImg(item.img);
        setModel(item.model);
        setCompany(item.company);
        setPrice(item.price);
        setId(item._id);
        setCategory(item.category);
    }

    const deletePost = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:4000/admin/deleteproduct/${id}`);
            let data1 = [...products];
            data1 = data1.filter((item) => item._id !== id)
            console.log(response);
            setProducts(data1);
        }

        catch (err) {
            console.log(err)
        }
    }

    const createPost = async () => {
        try {
            const { data } = await axios.post("http://localhost:4000/admin/addproduct", { img, model, company, price, category });
            let tempProducts = [...products];
            tempProducts.push(data);
            console.log(tempProducts)
            setImg("");
            setModel("");
            setCompany("");
            setPrice("");
            setId("");
            setCategory("");
            setProducts(tempProducts);
        }

        catch (err) {
            console.log(err)
        }
    }

    const updatePost = async () => {
        try {
            console.log(id)
            const {data} = await axios.put(`http://localhost:4000/admin/updateproduct/${id}`, {img, model, company, price, category });
            let tempProducts = [...products];
            let index = tempProducts.findIndex((x) => x.id === data.id);
            tempProducts[index] = data;
            setImg("");
            setModel("");
            setCompany("");
            setPrice("");
            setId("");
            setCategory("");
            setProducts(tempProducts);
        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (id !== "") updatePost();
        else createPost();
    }

    return (
        <>
            <Header heading="All Products" />
            {products.map((product) => <ProductItem key={product._id} item={product} editPost={editPost} deletePost={deletePost} />)}
            <form onSubmit={handleSubmit}>
                <label>img : </label>
                <input type="text" name="img" value={img} onChange={(e) => setImg(e.target.value)} />
                <label>model : </label>
                <input type="text" name="model" value={model} onChange={(e) => setModel(e.target.value)} />
                <label>company : </label>
                <input type="text" name="company" value={company} onChange={(e) => setCompany(e.target.value)} />
                <label>price : </label>
                <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <label>category : </label>
                <input type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)} />
                <button>Submit</button>
            </form>
        </>
    )
}

export default GetProducts;