import React from "react";



export const getPost = async ({item,limit =12}) => {
    const API_URL = `https://jsonplaceholder.typicode.com/posts?_item=${item}_limit=${limit}`
    const response = await fetch(API_URL)
    if(!response.ok) {          // 만약에 response 가 ok가 아니라면 에러 발생시킨다. 
      throw new Error('에러가 발생했습니다.')
    }
    return await response.json()    //만약 ok라면 response를 반환 
  };

