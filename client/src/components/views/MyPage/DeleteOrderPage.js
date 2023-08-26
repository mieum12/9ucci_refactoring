import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Header from '../../Main/MainHeader';

function DeleteOrderPage() {
  return (<>
    <Header/>
    <Orderdelete>
        <h1>모든 주문이 취소되었습니다! 확인해주세요!</h1>
        <Cont>
          <Link to='/'><button>COUNTINUE SHOPPING</button></Link>
        </Cont>
    </Orderdelete>

  </>
  )
}

export default DeleteOrderPage;

const Orderdelete = styled.div`
  text-align: center;
  margin: 150px;
  .checkcomplete{
    width: 100px;
    higth: 100px;
    margin: 50px;
  }

`
const Cont = styled.div`
	text-align: center;
	button {
		margin: 20px;
		background-color: grey ;
		color: white;
    border: 3px solid;
    border-radius: 10px;
	}
`