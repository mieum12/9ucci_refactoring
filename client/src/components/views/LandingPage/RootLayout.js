import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Main/Header";

export default function RootLayout() {
  return (
    <Root>
      <Header />
      <main className="main-container">
        <Outlet />
      </main>
    </Root>
  );
}

const Root = styled.div`
  .main-container {
    text-align: center;
  }
`;
