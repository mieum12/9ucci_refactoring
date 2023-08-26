import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { FloatingLabel } from 'react-bootstrap';
import axios from 'axios';

const ProductUpdate = () => {
    const navigate = useNavigate();
    const [id, setId] = useState();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(0);
    
    const EditHandler = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/products/${id}`,{
            title : title,
            category : category,
            price : price,
        },{withCredentials: true})
          .then((res) => {
            console.log(res.data);
            navigate(`/admin`)
        })
          .catch((err) => {console.log(err.message)})

        await axios.get(`http://localhost:5000/products/${id}`,).then(res => console.log(res.data))
    }
    
    return(
        <Wrap>
        <FloatingLabel controlId='floatingNumber' label='Product Number' className='mb-3' onChange={(e) => setId(e.target.value)}>
            <Form.Control type="Number" />
        </FloatingLabel>
        <FloatingLabel controlId='floatingTitle' label='Product Name' className='mb-3' onChange={(e) => setTitle(e.target.value)}>
            <Form.Control type="String" />
        </FloatingLabel>
        <FloatingLabel controlId='floatingCategory' label='Product Category' className='mb-3' onChange={(e) => setCategory(e.target.value)}>
            <Form.Control type="String" />
        </FloatingLabel>
        <FloatingLabel controlId='floatingPrice' label='Product Price' className='mb-3' onChange={(e) => setPrice(e.target.value)}>
            <Form.Control type="Number" />
        </FloatingLabel>
      <ButtonWrap>
        <Button type="submit" onClick={EditHandler}>EDIT</Button>
      </ButtonWrap>
    </Wrap>
    )
}

export default ProductUpdate;

const Wrap = styled.div `
  display : flex;
  flex-direction : column;
  justify-content : center;
  
  padding-top : 30px;
  width : 1653px;

`

const ButtonWrap = styled.div`
  display : flex;
  justify-content : center;

  Button {
    margin-right : 20px;
    
    background-color : #6c757d;
    border-color : #6c757d;
    border-radius : 5px;

    font-size : 15px;
  }
`