import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Div>
      COPYRIGHT © 9UCCI. All rights reserved.
      <br />
      메일 문의 9UCCI@elice.com 전화 문의 010-1234-5678
    </Div>
  );
};

export default Footer;

const Div = styled.div`
display: flex;
justify-content: right;
margin: 200px 50px 50px;

position:relative
font-size: 10px;
color : #D9D9D9;
`;
