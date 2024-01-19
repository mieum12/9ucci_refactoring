import React from "react";
import styled from "styled-components";
import { Link, useNavigate, NavLink, Form } from "react-router-dom";
import axios from "axios";
import HeaderCartBtn from "./HeaderCartBtn";
import {auth} from "../../firebase";
import {adminId} from "../../admin";

function Header(props) {
  const navigate = useNavigate();

  const user = auth.currentUser
  console.log('지금 유저는???',user)

  const onLogOut = async () => {
    const logOut = window.confirm('로그아웃 하시겠습니까?')
    if (logOut) {
      await auth.signOut()
      navigate('/login')
    }
  }

  return (
    <Nav>
      <div>
        <ul className="nav-list">
          <ul>
            <NavLink to="/shop">SHOP</NavLink>
          </ul>
          { !user ? (<ul>
            <NavLink to="/login">LOGIN/JOIN</NavLink>
          </ul>) : ( <>
          <ul>
            <HeaderCartBtn onClick={props.onShowCart}/>
          </ul>
          <ul>
            <NavLink to="/mypage">{(user.uid !== adminId) ? 'MY PAGE' : 'ADMIN PAGE'}</NavLink>
          </ul>
          <ul>
            <button onClick={onLogOut} className='log-out'>LOGOUT</button>
          </ul>
          </>)}
        </ul>
      </div>
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  display: flex;
  justify-content: left;
  margin: 20px;
  position:relative

  ul{
    font-size: 10px;
  }
  .nav-list {
    display: flex;
    padding: 0;
    margin: 0;
    
  }
  .nav-list a {
    text-decoration: none;
    display: flex;
    color: black;
    
  }
  .logout-btn {
    margin: 0;
  }
  button {
    border: white solid 0px;
    background: none;
    cursor: pointer;
    padding: 0
  }
  }
`;
