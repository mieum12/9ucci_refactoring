// import React, { useEffect, useState } from "react";
import React from "react";
import { Detail } from "../../Products/detail";
import Head from '../../Main/MainHeader';

export default function ProductDetailPage(){

// //장바구니 담기 시 로컬 스토리지에 정보를 저장 
//     const options = null;
//     const cart = localStorage.getItem("cart");
//     if (cart) {
//       const parseCart = JSON.parse(cart);
//       localStorage.setItem("cart", JSON.stringify([...parseCart, ...options]));
//     } else {
//       localStorage.setItem("cart", JSON.stringify(options));
//     }
//     //저장 여부를 알리고 페이지 이동 의사를 묻는 알림창
//     alert({
//       title: "장바구니에 잘 담겼어요!",
//       icon: "success",
//       buttons: {
//         showCart: { text: "장바구니 이동", value: "showCart" },
//         cancel: "쇼핑 계속하기",
//       },
//     })

    

    return (
        <div>
        <Head></Head>
        <Detail/>
        </div>
        );
}




    
