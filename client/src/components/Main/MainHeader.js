import React from 'react';
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Header () {
    const isLogin = sessionStorage.getItem('user');
    const isAdmin = sessionStorage.getItem('admin')
    const navigate = useNavigate();
    const LogoutHandler = async() => {
        await axios.get(' http://localhost:5000/signout', {withCredentials : true})
          .then((res) => {console.log(res.data.cookies); navigate('/'); sessionStorage.clear()})
          .catch((err) => {console.log(err.message)})
      }
    
      return (
        <StyledDiv>
            <ImgBlock src='https://cdn.discordapp.com/attachments/1065825998043631636/1069539124203241502/001.png' />
            <LogoLink to='/'>9UCCI</LogoLink>
            <StyledNav>
                {!isLogin && !isAdmin && (<><JoinLink to='/join'>JOIN</JoinLink>
                <LoginLink to='/login'>LOGIN</LoginLink>
                <CartLink to='/cart'>CART</CartLink></>)}
                {isLogin && <> <StyledButton onClick={LogoutHandler}>LOGUT</StyledButton> 
                <MypageLink to='/mypage'>MY PAGE</MypageLink></>}
                {isAdmin && <><AdminLink to='/admin'>ADMIN</AdminLink>
                <StyledButton onClick={LogoutHandler}>LOGOUT</StyledButton><MypageLink to='/mypage'>MY PAGE</MypageLink></>}
            </StyledNav>
            <StyledCategory>
                <TopLink to='/top'>TOP</TopLink>
                <BottomLink to='/bottom'>BOTTOM</BottomLink>
                <Link to='/outer'>OUTER</Link>
            </StyledCategory>
        </StyledDiv>
    )
}

export default Header;

const StyledDiv = styled.div `
    display : flex;
    justify-content : center;
`
const ImgBlock = styled.img `
//   position : absolute;
  width : 1653px;
  height : 306px;
  object-fit : cover;
  filter : brightness(70%);
`
const LogoLink = styled(Link) `
  margin : 71px 703px 205px 681px;
  position : absolute;
  width : 260px;
  height : 30px;

  font-style : normal;
  font-weight: 700;
    font-size: 70px;
    line-height: 30px;

    text-align: center;

    text-decoration: none;
    color: #FFFFFF;
`
const StyledNav = styled.div `
    margin : 28px 40px 260px 1319px;
    position : absolute;

    a {
    text-decoration: none;
    color: #FFFFFF;
    
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    }
`
const JoinLink = styled(Link)`
    margin-right: 73px;
    width: 36px;
    height: 18px;
`

const LoginLink = styled(Link) `
    margin-right: 73px;
    width: 47px;
    height: 18px;
`
const AdminLink = styled(Link) `
    margin-right: 40px;
    width: 47px;
    height: 18px;
`
const MypageLink = styled(Link) `
    width: 68px;
    height: 18px;
`
const CartLink = styled(Link)`
    
    width: 36px;
    height: 18px;
`
const StyledCategory = styled.div`
    position: absolute;
    margin : 243px 149px 33px 148px;

    a{
        text-decoration: none;
        color: #FFFFFF;
    
        font-weight: 700;
        font-size: 25px;
        line-height: 30px;
        text-align: center;  
    }
`
const TopLink = styled(Link) `
    margin-right : 553px;
`

const BottomLink = styled(Link) `
    margin-right : 553px;
`

const StyledButton = styled.button `
  border : none;
  background-color : transparent;

  font-weight : 600;
  font-size : 15px;
  line-height : 18px;
  text-align : center;

  width : 65px;
  height : 18px;
  
  color : #FFFFFF;
  padding-right : 100px;
`