import React, {useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Header from '../../Main/MainHeader';
import { MyPageNav } from '../../Mypage/MypageNav';
import axios from "axios";


function OrderTrackingPage() {



    //가져온 체크된 파일들
    const [checkItems, setCheckItems] = useState([]);
    useEffect(()=>{
      axios.get("/data/checkItems.json")
        .then((data)=>{setCheckItems(data.data.checkItems);});
    }, [setCheckItems]);




  return (<>
    <Header/>
    <Div><MyPageNav/></Div>
      <Title>
        <h4>[주문/배송 조회하기]</h4>
      </Title>

    <Ordertracking>
      <Orderlists>
        {checkItems?.map((checkItems, key) =>(
          <div key={key}>
            <div> 
              <img style={{width: "100px", height: "100px"}} src={checkItems.image} alt="체크된주문사진"/> 
              <p>{checkItems.title}</p> 
              <p>({checkItems.count}개)</p>
            </div>
            
          </div>
        ))}
      </Orderlists>
      
        <OrderStatus>
          <Status>
            🔴 배송 준비중
            <Cont>
              <Link to='/edit'><button>주문 정보 수정하기</button></Link>
            </Cont>
            <Cont>
              <Link to='/deleteorder'><button>주문 취소하기</button></Link>
            </Cont>
          </Status>
          <Status>
            ⚪️ 배송중
          </Status>
          <Status>
          ⚪️ 배송 완료!!
          </Status>
        </OrderStatus>
      

        

    </Ordertracking>

  </>
  )
}

export default OrderTrackingPage;


const Title = styled.div`
text-align: center;
padding-top: 50px;
`

const Ordertracking = styled.div`
display : flex;
flex-direction : row;
justify-content : center;
align-items : center;
`
const Orderlists = styled.div`
  border: solid grey;
  border-radius: 50px;
  padding: 30px;
  margin: 30px;
  
display: flex;
text-align: center;

  img {
    margin: 30px;
  }
`
const OrderStatus = styled.div`
border-left: solid grey;
border-right: solid grey;
border-radius: 50px;
padding: 10px;
  margin: 30px;

  display: flex;
  text-align: center;
`

const Status = styled.div`
display: flex;
text-align:center;
padding: 80px;
 margin: auto;
//  background-color: blue;
`

const Div = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;

`



const Cont = styled.div`
	button {
		margin: 2px;
		background-color: grey ;
		color: white;
    border: 3px solid;
    border-radius: 10px;
	}
`