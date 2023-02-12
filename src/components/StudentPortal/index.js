// we can use eval function but using eval is harmful to application so i have written like this

import { Component } from "react";
import {
  MainContainer,
  QuestionContainer,
  QuestionAnswer,
  Question,
} from "./styledComponent";

import AnswerComponent from "../AnswerComponent";

import Header from "../Header";

class StudentPortal extends Component {
  state = { questions: [] };

  componentDidMount() {
    const questions = JSON.parse(localStorage.getItem("questions"));
    this.setState({ questions: [...questions] });
  }

  render() {
    const { questions } = this.state;
    return (
      <MainContainer>
        <Header />
        <QuestionContainer>
          {questions.map((each, index) => (
            <QuestionAnswer key={each.id}>
              <Question>
                Q{index + 1}: {each.question}
              </Question>
              <AnswerComponent qtnId={each.id} />
            </QuestionAnswer>
          ))}
        </QuestionContainer>
      </MainContainer>
    );
  }
}

export default StudentPortal;
