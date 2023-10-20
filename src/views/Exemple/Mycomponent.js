import React from "react";
import ChildComponent from "./ChildComponent";

class Mycomponent extends React.Component {
  /**
   * JSX  : Cho phép hàm js trả về html
   * Chỉ trả về 1 phần tử
   * Fragment : thay thế cho div tổng
   * state : : Là 1 Object
   */
  state = {
    firstName: "",
    lastName: "",
  };
  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("check data input : ", this.state);
  };
  render() {
    console.log(">>> call render : ", this.state);
    let name = "Mạnh";
    return (
      <React.Fragment>
        <form>
          <label htmlForfor="fname">First name:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlForfor="lname">Last name:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />
          <br />
          <input
            type="button"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
        <ChildComponent name={"child one"}></ChildComponent>
        <ChildComponent name={"child two"}></ChildComponent>
        <ChildComponent name={"child three"}></ChildComponent>
      </React.Fragment>
    );
  }
}
export default Mycomponent;
