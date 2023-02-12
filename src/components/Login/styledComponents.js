import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1b6cf3;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-shadow: 2px 2px 3px #111;
  background-color: #fff;
  border-radius: 8px;
`;

export const Select = styled.select`
  border-radius: 5px;
  border: 1px solid #333;
  height: 35px;
  width: 300px;
  padding: 10px;
  margin: 5px;
`;

export const LoginButton = styled.button`
  background-color: #1b6cf7;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  padding: 10px;
  width: 300px;
  margin: 5px;
`;
