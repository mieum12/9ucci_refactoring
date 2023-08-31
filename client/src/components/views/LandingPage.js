import React, { useEffect } from "react";
import styled from "styled-components";
import Body from "../Main/MainBody";
import Footer from "../Footer/Footer";

function LandingPage() {
  // useEffect(()=>{
  //   axios.get('/api/hello')
  //   .then(res=>{console.log(res.data)})
  // },[])

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
      <div
        style={{
          paddingTop: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Body></Body>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Footer></Footer>
      </div>
    </>
  );
}

export default LandingPage;
