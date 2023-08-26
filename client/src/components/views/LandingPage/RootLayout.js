import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function RootLayout() {
  return (
    <Root>
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
