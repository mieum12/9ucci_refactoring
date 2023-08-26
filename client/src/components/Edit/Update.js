import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { FloatingLabel } from 'react-bootstrap';
import axios from 'axios';

const Update = () => {
    const navigate = useNavigate();
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const [number, setNumber] = useState('');
    
    const EditHandler = async (e) => {
        e.preventDefault();
        await axios.put(' http://kdt-ai6-team09.elicecoding.com:5000/userinfo',{
            address : address,
            address2 : address2,
            phoneNumber : number,
        },{withCredentials: true})
          .then((res) => {
            console.log(res.data);
            if(res.data.message == 'SUCCESS UPDATE PROFILE') {
                navigate('/mypage');
            }
        })
          .catch((err) => {console.log(err.message)})
    }
    
    return(
        <Wrap>
        <FloatingLabel controlId='floatingAddress' label='도로명 주소' className='mb-3' onChange={(e) => setAddress(e.target.value)}>
            <Form.Control type="String" />
        </FloatingLabel>
        <FloatingLabel controlId='floatingAddress2' label='상세 주소' className='mb-3' onChange={(e) => setAddress2(e.target.value)}>
            <Form.Control type="String" />
        </FloatingLabel>
        <FloatingLabel controlId='floatingNumber' label='휴대폰 번호' className='mb-3' onChange={(e) => setNumber(e.target.value)}>
            <Form.Control type="String" />
        </FloatingLabel>
      <ButtonWrap>
        <Button type="submit" onClick={EditHandler}>EDIT</Button>
      </ButtonWrap>
    </Wrap>
    )
}

export default Update;

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