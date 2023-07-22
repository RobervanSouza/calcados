import React from "react";
import { styled } from "styled-components";




const StiledDesconto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 66px;
  width: 66px;
  margin-left: 3rem;
  /* background-color: green; */
  margin-bottom: 5rem;
  transform: rotate(-45deg);
  overflow: hidden;
  position: absolute;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    background-color: #33dc2d;
    height: 69px;
    width: 53px;
    transform: rotate(45deg);
    margin-left: -39px;
    margin-top: -23px;
  }
  p{
    font-size: 11px;
  
  }
`;

interface DescontoProps {
  discount: number;
}

const Desconto: React.FC<DescontoProps> = ({ discount }) => {
  return (
    <StiledDesconto>
      <div>
        <span>
          <p>{discount}%</p>
          <p>OFF</p>
        </span>
      </div>
    </StiledDesconto>
  );
};
export default Desconto;
