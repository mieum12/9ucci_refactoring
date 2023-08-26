import React,{useEffect} from 'react'
// import Body from '../Main/MainBody';
import Head from '../../Main/MainHeader';
import styled from 'styled-components'
import Body from '../../Main/MainBody';
import Footer from '../../Footer/Footer';

function LandingPage() {
  // useEffect(()=>{
  //   axios.get('/api/hello')
  //   .then(res=>{console.log(res.data)})
  // },[])


  return (
      <>
          <div style={{ display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center' }}>
            <Head></Head>
          </div>
          <div style={{ paddingTop : '30px',display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center' }}>
            <Body></Body>
          </div>
          <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
            <Footer></Footer>
          </div>

      </>
  )
}

export default LandingPage

const Div = styled.div `
  diplay : flex;
  flex-direction : column;
  jutify-content : center;
  align-items : center;
`
