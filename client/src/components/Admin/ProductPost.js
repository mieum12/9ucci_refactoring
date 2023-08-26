import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { FloatingLabel } from 'react-bootstrap';
import axios from 'axios';

const ProductPost = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(0);
    const [company, setCompany] = useState('');
    
    const EditHandler = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/products',{
            title : title,
            description : description,
            category : category,
            price : price,
            company : company,
        },{withCredentials: true})
          .then((res) => {
            console.log(res.data);
            navigate(`/admin`);
        })
          .catch((err) => {console.log(err.message)})
    }
    
    return(
        <Wrap>
        <FloatingLabel controlId='floatingTitle' label='Product Name' className='mb-3' onChange={(e) => setTitle(e.target.value)}>
            <Form.Control type="String" />
        </FloatingLabel>
        <FloatingLabel controlId='floatingDescription' label='Product Description' className='mb-3' onChange={(e) => setDescription(e.target.value)}>
            <Form.Control type="String" />
        </FloatingLabel>
        <FloatingLabel controlId='floatingCategory' label='Product Category' className='mb-3' onChange={(e) => setCategory(e.target.value)}>
            <Form.Control type="String" />
        </FloatingLabel>
        <FloatingLabel controlId='floatingPrice' label='Product Price' className='mb-3' onChange={(e) => setPrice(e.target.value)}>
            <Form.Control type="Number" />
        </FloatingLabel>
        <FloatingLabel controlId='floatingCompany' label='Product Company' className='mb-3' onChange={(e) => setCompany(e.target.value)}>
            <Form.Control type="String" />
        </FloatingLabel>

      <ButtonWrap>
        <Button type="submit" onClick={EditHandler}>POST</Button>
      </ButtonWrap>
    </Wrap>
    )
}

export default ProductPost;

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