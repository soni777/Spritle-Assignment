import { withRouter } from "react-router-dom";

import Cookies from "js-cookie";

import "./index.css";

const Header = (props) => {
  const onClickButton = () => {
    Cookies.remove("ACCESS_TOKEN");
    const { history } = props;
    history.replace("/login");
  };

  return (
    <nav className="nav">
      <button className="link" type="button" onClick={onClickButton}>
        Logout
      </button>
    </nav>
  );
};

export default withRouter(Header);
