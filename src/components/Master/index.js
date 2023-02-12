import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "../Header";

import "./index.css";

class Master extends Component {
  state = {
    questions: [],
    question: "",
  };

  componentDidMount() {
    const questions = JSON.parse(localStorage.getItem("questions"));
    if (questions !== null) {
      this.setState({ questions: [...questions] });
    }
  }

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

  render() {
    const { question, questions } = this.state;
    // localStorage.clear();
    // console.log(questions);
    return (
      <div className="main-container">
        <Header />
        <div>
          <ul className="questions-container">
            <h1>Questions</h1>
            {questions.map((each, index) => (
              <li className="question" key={each.id}>
                Q{index + 1}: {each.question}
              </li>
            ))}
          </ul>
          <form onSubmit={this.onSubmitQuestion}>
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
