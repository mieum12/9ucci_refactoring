import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
// import {Cookies} from 'react-cookie'


//cookie 사용
// const cookies = new Cookies()
// cookies.save("{checkItems.title}", "{checkItems.count}", {path : '/'});


export function CartTable() {

  //카트의 데이터 받아오기(서버연결성공)
  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    axios.get(' http://localhost:5000/products',{withCredentials : true})
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {console.log(err.message)})
  },[])



	// 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);
  useEffect(()=>{
    axios.get("/data/checkItems.json").then((data)=>{
      setCheckItems(data.data.checkItems);
    });
  }, [setCheckItems]);
        
  // 1. 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems(prev => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems((checkItems) => checkItems.filter((el) => el !== id));
    }
  };
        
  // 2. 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if(checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      products.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  }

  //선택상품 삭제 (ok)
  const handleRemove = (id) => {
    setProducts(products.filter((products) => products.id !== id));
    setCheckItems(checkItems.filter((check) => parseInt(check) !== id));
  };






  // //+,- 누르면 증감되도록하기
  const [counter, setCounter] = useState(1);
  const handleCount = (type) => {
    if (type === "plus") {
      setCounter(counter + 1);
      
    } else {
      if (counter === 1) return;
      setCounter(counter - 1);
    }
  }
  
  // const handleCount = (type, id) => {
  //   if (type === "plus") {
  //     const idx = products.find((el)=> el.id === id);
  //     setProducts(products[idx].__v + 1);
  //   } else {
  //     if (counter === 1) return;
  //     const idx = products.find((el)=> el.id === id);
  //     setProducts(products[idx].__v - 1)
  //   }
  // }

  //전체금액 구하기
  const [total, setTotal] = useState(0);



    return(
      <Table>
        <table border="">
          <thead>
            <tr>
              <td><input type="checkbox"
                        name='select-all'
                        onChange={(e) => handleAllCheck(e.target.checked)}
                        checked={checkItems.length === products.length ? true : false}
                        />
							</td>
              <td>Product img</td>
              <td>Product name</td>
              <td>Count</td>
              <td>Price</td>
						</tr>
					</thead>

          <tbody> 
            {products?.map((product, idx) =>(
              <tr key={idx}>
                <td><input type="checkbox" 
                          name={`select-${product.id}`}
                          onChange={(e) => {
                            handleSingleCheck(e.target.checked, product.id);
                          }}
                          checked={checkItems.includes(product.id) ? true : false}
                          
                          />
                </td>
								<td><img style={{width: "100px", height: "100px"}} src={product.imgUrl} alt="상품사진" ></img></td>
                <td> {product.title} </td>   
                <td>
                  <div> {counter}개 </div>
                  <div>
                    <button onClick={()=> handleCount("minus", product.id)}> −</button>
                    <button onClick={()=> handleCount("plus", product.id)}> +</button>
                  </div>
                </td>
                <td>{product.price * counter}원</td>
              </tr>
            ))}
              <tr>
                    <td><button className="delete" onClick={()=> handleRemove((products.id))}>선택상품 삭제</button></td>  
                    <td></td>    
                    <td></td>
                    <td></td>
                    <td>{total}원</td>
                </tr>
              
                    
          </tbody>
        </table>
      </Table>
  );
};


const Table = styled.div`
  // background-color: lightgreen;
  text-align: center;
  margin: 20px;
  width : 100vh;
  table {
    width: 100%;
    border-top: 1px solid grey;
    border-collapse: collapse;
    border-left: none;
    border-right: none;
  }

  th, td {
      border-bottom: 1px solid grey;
      border-left: none;
      border-right: none;
      padding: 10px;
    }

  //왜 적용이 안되는건지
  // .image{
  //   width: 100px;
  //   height: 100px;
  // }

  .delete{
    background-color: tomato ;
    color: white;
    border: 3px solid;
    border-radius: 10px;
  }
`
   