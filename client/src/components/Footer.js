import styled from "styled-components";

export default function Footer() {
  return (
    <FootWrapper>
      COPYRIGHT © 9UCCI. All rights reserved.
      <br />
      메일 문의 9UCCI@elice.com 전화 문의 010-1234-5678
    </FootWrapper>
  );
};

const FootWrapper = styled.div`
display: flex;
justify-content: right;
margin: 50px;
position:relative;
font-size: 10px;
color : #D9D9D9;
`;
