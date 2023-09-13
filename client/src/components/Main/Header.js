import React from "react";
import styled from "styled-components";
import { Link, useNavigate, NavLink, Form } from "react-router-dom";
import axios from "axios";
import HeaderCartBtn from "./HeaderCartBtn";

function Header(props) {
  const isLogin = sessionStorage.getItem("user");
  const isAdmin = sessionStorage.getItem("admin");
  const navigate = useNavigate();
  const LogoutHandler = async () => {
    await axios
      .get(" http://localhost:5000/signout", { withCredentials: true })
      .then((res) => {
        console.log(res.data.cookies);
        navigate("/");
        sessionStorage.clear();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Nav>
      <div>
        <ul className="nav-list">
          <ul>
            <NavLink to="/products">SHOP</NavLink>
          </ul>
          <ul>
            <HeaderCartBtn onClick={props.onShowCart} />
          </ul>
          <ul>
            <NavLink to="/login">LOGIN/JOIN</NavLink>
          </ul>
          <ul>
            <NavLink to="/mypage">MY PAGE</NavLink>
          </ul>
          <ul>
            <Form action="/logout" method="post" className="logout-btn">
              <button>LOGOUT</button>
            </Form>
          </ul>
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
