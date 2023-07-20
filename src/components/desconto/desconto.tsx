import React from "react";
import { styled } from "styled-components";

const StiledDesconto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 53px;
  margin-left: 3rem;
  background-color: green;
  margin-bottom: 5rem;
  &::after {
    content: "▾";
    font-size: 3.5rem;
    color: #ab2121;
    transform: rotate(360deg);
    margin-top: 3rem;
  }
`;
const Desconto = () => {
  return (
    <StiledDesconto>
      <div>
        <p>50%</p>
        <p>OFF</p>
      </div>
    </StiledDesconto>
  );
};

export default Desconto;
