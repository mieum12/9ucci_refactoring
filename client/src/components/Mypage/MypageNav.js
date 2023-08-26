import React from "react";
import Head from '../Main/MainHeader'
import styled from "styled-components";
import {Link} from 'react-router-dom'

export function MyPageNav(){ 
  return (
    <FlexContainer>
      <FlexItem><StyledLink to='/mypage'>MY ACCOUNT</StyledLink></FlexItem>
      <FlexItem>|</FlexItem>
      <FlexItem><StyledLink to='/cart'>SHOPPING BAG (16)</StyledLink></FlexItem>
      <FlexItem>|</FlexItem>
      <FlexItem><StyledLink to='/ordertracking'>ORDER TRACKING</StyledLink></FlexItem>
    </FlexContainer>
  )
}

const FlexContainer = styled.div`
  
  display: flex;
  justify-content: left;
  align-items :center;

  width : 1653px;

  border-bottom : 2px solid #BAB5B5;
`;

const FlexItem = styled.div`
  margin: 20px;

  color : #A8A1A1;
`;

const StyledLink = styled(Link) `
  text-decoration: none;
  color: #A8A1A1;
  
  font-style : normal;
  font-weight : 700;
  font-size : 25px;
  line-height : 30px;
`