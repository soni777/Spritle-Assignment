import { Component } from "react";
import Cookies from "js-cookie";

import {
  LoginContainer,
  LoginForm,
  Select,
  LoginButton,
} from "./styledComponents";

class Login extends Component {
  state = { option: "master" };

  onChangeOption = (event) => {
    console.log(event.target.value);
    this.setState({ option: event.target.value });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const { history } = this.props;
    const { option } = this.state;
    Cookies.set("ACCESS_TOKEN", option, { expires: 1 });
    history.replace(`/master`);
  };

  render() {
    const { option } = this.state;
    return (
      <LoginContainer>
        <LoginForm onSubmit={this.onSubmitForm}>
          <h2>Spritle Master/Student Login</h2>
          <Select value={option} onChange={this.onChangeOption}>
            <option value="master">Master</option>
            <option value="student">Student</option>
          </Select>
          <LoginButton type="submit">Login</LoginButton>
        </LoginForm>
      </LoginContainer>
    );
  }
}

export default Login;
