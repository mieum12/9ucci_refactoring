import React, { useEffect } from "react";
import MainCarousel from "../Main/MainCarousel";

function LandingPage() {
  // useEffect(()=>{
  //   axios.get('/api/hello')
  //   .then(res=>{console.log(res.data)})
  // },[])

  return <MainCarousel />;
}

export default LandingPage;
