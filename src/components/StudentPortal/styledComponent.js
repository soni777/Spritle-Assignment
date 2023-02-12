import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
`;

export const QuestionContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const QuestionAnswer = styled.li`
  border: 1px solid #888;
  border-radius: 3px;
  margin: 10px;
  padding: 5px;
  width: 500px;
`;

export const Question = styled.h2`
  color: #111;
`;

export const Answer = styled.h3`
  color: red;
`;
