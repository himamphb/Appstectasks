import styled from "styled-components";

const DivWrapper = styled.div`
  height: 5vh;
  width: 30%;
  margin: auto;
  text-align: center;
  color: rgb(0, 0, 250);
  background-color: rgb(250, 100, 250);
  padding: 4px;
  border-radius: 10px;
`;
const StyledButton = styled.button`
  background-color: paleturquoise;
  cursor: pointer;
  padding: 12px;
  border: none;
  border-radius: 8px;
  margin: 4px;
  &:hover {
    background-color: rgb(400, 250, 400);
  }
`;

const DivContainer = styled.div`
  /* border: 1px solid #000; */
  border-radius: 6px;
  height: 280px;
  width: 80%;
  background-color: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;
const DivSection = styled.div`
  max-height: 100vh;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-left: 50px;
  margin-top: 50px;
  row-gap: 10px;
  padding: 4px;
  text-align: center;
`;
export { DivWrapper, StyledButton, DivContainer, DivSection };
