import { Component } from "react";

import { Form, Answer, Submit } from "./styledComponents";

class AnswerComponent extends Component {
  state = { answer: "" };

  onSubmitAnswer = (event) => {
    event.preventDefault();
    const { qtnId } = this.props;
    const { answer } = this.state;
    const answers = JSON.parse(localStorage.getItem("answers"));
    const newAnswer = { answer, id: qtnId };
    if (answers === null) {
      localStorage.setItem("answers", JSON.stringify([newAnswer]));
    } else {
      localStorage.setItem("answers", JSON.stringify([...answers, newAnswer]));
    }
  };

  onChangeAnswer = (event) => {
    this.setState({ answer: event.target.value });
  };

  render() {
    const { answer } = this.state;
    return (
      <Form onSubmit={this.onSubmitAnswer}>
        <Answer
          type="text"
          value={answer}
          placeholder=" Type your answer here and submit"
          onChange={this.onChangeAnswer}
        />
        <Submit type="submit">Submit Answer</Submit>
      </Form>
    );
  }
}

export default AnswerComponent;
