import React, {useState,useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export function BuyPageBody() {

  //체크된파일들
  const [checkItems, setCheckItems] = useState([]);
  useEffect(()=>{
    axios.get("/data/checkItems.json")
      .then((data)=>{setCheckItems(data.data.checkItems);});
  }, [setCheckItems]);

  //userinfor가져오기    
  const [userinfo, setUserInfo] = useState([]);

  useEffect(()=>{
    axios.get(' http://kdt-ai6-team09.elicecoding.com:5000/userinfo',{withCredentials : true})
      .then((res) => {
        console.log(res.data);
        setUserInfo(res.data.userinfo)
      })
      .catch((err) => {console.log(err.message)})
  },[])

    


  return (
  <BuyPageBodyContainer>
    <h3>[Buy Page] 주문결제 페이지</h3>

    <h5 className="UsIf">👤 주문자정보</h5>
    <div> {userinfo.phoneNumber} / {userinfo.address} {userinfo.address2}</div>

    <h5 className="UsIf">📦 배송상품정보 </h5>
    {checkItems?.map((checkItems, key) =>(
              <div key={key}>
                <div> <img style={{width: "50px", height: "50px"}} src={checkItems.image} alt="체크된주문사진"/> {checkItems.title}({checkItems.price}원) : {checkItems.count}개</div>
              </div>
            ))}
    
    <h5 className="UsIf">💳 결제수단</h5> <p>은행 계좌 <input type="text" /> </p>
    <h5 className="UsIf">💸 결제정보</h5> <p>199000원</p>

    <Letsbuy>
      <Link to='/ordercompletepage'><button>결제하기</button></Link>
    </Letsbuy>
  </BuyPageBodyContainer>)
}

const BuyPageBodyContainer = styled.div`
  text-align: center;
  margin: 20px;
  .UsIf{
    margin-top: 30px;
  }

`
const Letsbuy = styled.div`
	text-align: center;
	button {
		margin: 20px;
		background-color: grey ;
		color: white;
    border: 3px solid;
    border-radius: 10px;
	}
`