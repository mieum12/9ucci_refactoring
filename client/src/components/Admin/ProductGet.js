import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const ProductGet = () => {
    
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get(`http://kdt-ai6-team09.elicecoding.com/products`, {withCredentials : true})
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(e => console.log(e.message))
    },[])


    return (
        <>
        {product.map((product, Idx) => (
        <Wrap key={Idx}>
            <img src={product.imgUrl} />
            <Div>
                <div>Product Name = {product.title}</div>
                <div>Product Description = {product.description}</div>
                <div>Product Price = {product.price}</div>
                <button onClick={async ()=>{
                    await axios.delete(`http://kdt-ai6-team09.elicecoding.com/products/${product.product_no}`, {withCredentials : true})
                      .then(res => console.log(res.data))
                      .catch(e => console.log(e.message))
                }}>DELETE</button>
            </Div>
        </Wrap>
        ))
        }
    
    </>
)
}


export default ProductGet;

const Wrap = styled.div`
    display : flex;
    flex-direction : row;

    padding-top : 30px;

    img {
        width : 400px;
    }
`


const Div = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-Items : left;

    font-size : 20px;
    font-weight : 700;

    margin-left : 20px;
`

