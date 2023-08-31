import React from "react";
import Update from "../Edit/Update";
import styled from "styled-components";

const EditPage = () => {
  return (
    <Div>
      <Update></Update>
    </Div>
  );
};

export default EditPage;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
