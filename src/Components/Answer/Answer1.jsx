import React from "react";
import logo from "../../Assets/images/logo-1.png";
import NameInput from "./Answer2";
import NumberInput from "./Answer3";
import PositionInput from "./Answer4";
import TypeInput from "./TypeInput";
import Adress from "./Adress";
import SystemInput from "./System";
import About from "./About";
import Resistance from "./Resistance";
import Cause from "./Couse";
import Didline from "./Didline";
import { Link } from "react-router-dom";

import "./_answer.scss";

class Answer1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      phoneNumber: "",
      userPosition: "",
      firmTyle: "",
      adress: "",
      system: "",
      about: "",
      resistance: "",
      cause: "",
      didline: "",
      formNubmer: 1,
    };
  }

  getValueName = (e) => {
    this.setState({ userName: e.target.value });
    console.log(this.state);
  };
  getValuePhone = (e) => {
    this.setState({ phoneNumber: e.target.value });
    console.log(this.state);
  };
  getPosition = (e) => {
    this.setState({ userPosition: e });
  };
  getType = (e) => {
    this.setState({ firmTyle: e });
  };

  getAdress = (ev) => {
    this.setState({ adress: ev });
  };
  getSystem = (ev) => {
    this.setState({ system: ev });
  };
  getData = (e) => {
    this.setState({
      about: e,
    });
  };
  getRasistance = (e) => {
    this.setState({ resistance: e });
  };
  getCause = (e) => {
    this.setState({ cause: e });
  };
  getTime = (e) => {
    this.setState({ didline: e });
  };
  renderBtn() {
    if (this.state.formNubmer === 10) {
      return (
        <Link className="link-btn" to={"/"}>
          <button
            className="answer__left--subbtn  btn-send"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Жўнатиш
          </button>
        </Link>
      );
    } else {
      return (
        <button
          className="answer__left--subbtn "
          onClick={(e) => {
            e.preventDefault();
            this.setState({ formNubmer: this.state.formNubmer + 1 });
            console.log(this.state);
          }}
        >
          Кейингиси &rarr;
        </button>
      );
    }
  }
  inputRender() {
    if (this.state.formNubmer === 1)
      return <NameInput getValue={this.getValueName} />;
    if (this.state.formNubmer === 2)
      return <NumberInput state={this.state} getPhone={this.getValuePhone} />;
    if (this.state.formNubmer === 3)
      return (
        <PositionInput state={this.state} getPosition={this.getPosition} />
      );
    if (this.state.formNubmer === 4)
      return <TypeInput state={this.state} getType={this.getType} />;
    if (this.state.formNubmer === 5)
      return <Adress state={this.state} getAdress={this.getAdress} />;
    if (this.state.formNubmer === 6)
      return <SystemInput state={this.state} getSystem={this.getSystem} />;
    if (this.state.formNubmer === 7)
      return <About state={this.state} getData={this.getData} />;
    if (this.state.formNubmer === 8)
      return (
        <Resistance state={this.state} getRasistance={this.getRasistance} />
      );
    if (this.state.formNubmer === 9)
      return <Cause state={this.state} getCause={this.getCause} />;
    if (this.state.formNubmer === 10)
      return <Didline state={this.state} getTime={this.getTime} />;
    return "";
  }
  render() {
    return (
      <section className="answer">
        <div className="answer__header">
          <Link to={"/"}>
            <img className="answer__header-logo" src={logo} alt="logo" />
          </Link>
          <span
            style={{ width: `${(this.state.formNubmer - 1) * 10}%` }}
            className="answer__header-span"
          ></span>
        </div>
        <div className="main">
          <form className="answer__left">
            {this.inputRender()}
            <div className="answer__left-box">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (this.state.formNubmer !== 1)
                    this.setState({ formNubmer: this.state.formNubmer - 1 });
                  console.log(this.state.formNubmer);
                }}
                className="answer__left--backbtn"
              >
                <span className="btn-icon">&larr;</span> Орқага
              </button>

              {this.renderBtn()}
            </div>
          </form>
          <div className="answer__right">
            <span className="answer__right-span1">
              {" "}
              {this.state.formNubmer}0%
            </span>
            <span className="answer__right-span2">
              {this.state.formNubmer}/10
            </span>
          </div>
        </div>
      </section>
    );
  }
}
export default Answer1;
