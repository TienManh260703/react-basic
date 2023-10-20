import React from "react";

class ChildComponent extends React.Component {
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
    return (
      <React.Fragment>
        <div> Child component : {this.props.name}</div>
      </React.Fragment>
    );
  }
}
export default ChildComponent;
