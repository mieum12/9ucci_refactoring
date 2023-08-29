import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function MyPageNav() {
  return (
    <FlexContainer>
      <FlexItem>
        <StyledLink to="/mypage">MY ACCOUNT</StyledLink>
      </FlexItem>
      <FlexItem>|</FlexItem>
      <FlexItem>
        <StyledLink to="/cart">SHOPPING BAG (16)</StyledLink>
      </FlexItem>
      <FlexItem>|</FlexItem>
      <FlexItem>
        <StyledLink to="/ordertracking">ORDER TRACKING</StyledLink>
      </FlexItem>
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  width: 1653px;

  border-bottom: 2px solid #bab5b5;
`;

const FlexItem = styled.div`
  margin: 20px;

  color: #a8a1a1;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #a8a1a1;

  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
`;
