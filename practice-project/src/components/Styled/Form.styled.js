import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    font-family: 'Poppins';
    
}
`;

const DivWrapper = styled.div`
  height: 80vh;
  width: 40%;
  margin: 50px auto;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(0, 200, 200);
  font-family: Poppins;
  
`;

const FormWrapper = styled.input`
  width: 60%;
  height: 30%;
  border-radius: 8px;
  border: none;
  background-color: paleturquoise;
  outline: none;
  margin: 4px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  background-color: paleturquoise;
  cursor: pointer;
  padding: 12px;
  border: none;
  border-radius: 8px;
  margin: 4px;
  &:hover{
    background-color: rgb(400, 250, 400);
  }
`;
const StyledLabel = styled.label`
 width: 60%;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 60%;
  height: 30%;
 
`;

const DdSelectWrapper = styled.select`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 60%;
  border: none;
  border-radius: 8px;
  padding: 5px;
  outline: none;
  background-color: rgb(161, 226, 226);
  
`;

const DdOptionWrapper = styled.option`
`;

const TextArea = styled.textarea`
width: 60%;
  height: 40%;
  border: none;
  border-radius: 8px;
  outline:none;
  background-color: paleturquoise;
  font-family: 'Poppins';
  padding: 2px;
`;


export {
  DivWrapper,
  FormWrapper,
  StyledButton,
  StyledLabel,
  CheckBoxWrapper,
  GlobalStyle,
  DdSelectWrapper,
  DdOptionWrapper,
  TextArea
};
