// we can use eval function but using eval is harmful to application so i have written like this

import { Component } from "react";
import {
  MainContainer,
  QuestionContainer,
  QuestionAnswer,
  Question,
  Answer,
} from "./styledComponent";

import Header from "../Header";

class StudentPortal extends Component {
  state = { questions: [] };

  componentDidMount() {
    const questions = JSON.parse(localStorage.getItem("questions"));
    this.setState({ questions: [...questions] });
  }

  zero = () => 0;
  one = () => 1;
  two = () => 2;
  three = () => 3;
  four = () => 4;
  five = () => 5;
  six = () => 6;
  seven = () => 7;
  eight = () => 8;
  nine = () => 9;

  plus = () => "+";
  minus = () => "-";
  times = () => "*";
  divided_by = () => "/";

  getValue = (a) => {
    switch (a) {
      case "nine":
        return this.nine();

      case "eight":
        return this.eight();

      case "seven":
        return this.seven();

      case "six":
        return this.six();

      case "five":
        return this.five();

      case "four":
        return this.four();

      case "three":
        return this.three();

      case "two":
        return this.two();

      case "one":
        return this.one();

      case "zero":
        return this.zero();

      default:
        break;
    }
  };

  calculate = (question) => {
    // we can use eval function but using eval is harmful to application so i have written like this

    let value = question.split("(");
    const first_operand = this.getValue(value[0]);
    const second_operand = this.getValue(value[2]);
    const operator = value[1];
    switch (operator) {
      case "plus":
        value = first_operand + second_operand;
        break;
      case "minus":
        value = first_operand - second_operand;
        break;
      case "divided_by":
        value = first_operand / second_operand;
        break;
      case "times":
        value = first_operand * second_operand;
        break;
      default:
        break;
    }
    return Math.floor(value);
  };

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
              <Answer>Ans: {this.calculate(each.question)}</Answer>
            </QuestionAnswer>
          ))}
        </QuestionContainer>
      </MainContainer>
    );
  }
}

export default StudentPortal;
