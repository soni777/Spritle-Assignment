import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "../Header";

import "./index.css";

class Master extends Component {
  state = {
    questions: [],
    answers: [],
    question: "",
  };

  componentDidMount() {
    const questions = JSON.parse(localStorage.getItem("questions"));
    const answers = JSON.parse(localStorage.getItem("answers"));
    if (questions !== null) {
      this.setState({ questions: [...questions] });
    }

    if (answers !== null) {
      this.setState({ answers: [...answers] });
    }
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

  onChangeQuestion = (event) => {
    this.setState({ question: event.target.value });
  };

  onSubmitQuestion = (event) => {
    event.preventDefault();
    let questions = JSON.parse(localStorage.getItem("questions"));
    const { question } = this.state;
    const id = uuidv4();
    const newQuestion = { question, id };
    // console.log(newQuestion);
    if (questions === null) {
      questions = [newQuestion];
    } else {
      questions = [...questions, newQuestion];
    }
    localStorage.setItem("questions", JSON.stringify(questions));
    this.setState({ questions, question: "" });
  };

  getStudentAnswer = (id) => {
    const { answers } = this.state;
    const value = answers.findIndex((each) => each.id === id);
    if (value !== -1) {
      return answers[value].answer;
    }
    return 0;
  };

  render() {
    const { question, questions } = this.state;
    // localStorage.clear();
    // console.log(questions);
    return (
      <div className="main-container">
        <Header />
        <div>
          <h1>Questions & Answers</h1>
          <ul className="questions-container">
            {questions.map((each, index) => {
              const { id, question } = each;
              return (
                <li className="question" key={id}>
                  <p>
                    Q{index + 1}: {question}
                  </p>
                  <div className="answers-container">
                    <p>Ans: {this.calculate(each.question)}</p>

                    <p>Student Ans: {this.getStudentAnswer(id)}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <form className="form-container" onSubmit={this.onSubmitQuestion}>
            <input
              className="input"
              value={question}
              placeholder="Type leftOperand(operator(rightOperand)))  Ex:  seven(plus(nine()))"
              onChange={this.onChangeQuestion}
            />
            <button className="btn" type="submit">
              ADD
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Master;
