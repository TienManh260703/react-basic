import React from "react";

class Mycomponent extends React.Component {
  /**
   * JSX  : Cho phép hàm js trả về html
   * Chỉ trả về 1 phần tử
   * Fragment : thay thế cho div tổng
   * state : : Là 1 Object
   */

  state = {
    name: "Mạnh",
    channel: "Manh hoc react",
  };
  handleOnChangeNamme = (event) => {
    console.log(
      event.target.value,
      "event target : ",
      event.target,
      "event object : ",
      event
    );
    this.setState({
      name: event.target.value,
      channel: event.target.value,
    });
  };
  // click me
  handleClickButton = () => {
    console.log("hit the click");
    alert("click me");
  };
  render() {
    console.log(">>> call render : ", this.state);
    let name = "Mạnh";
    return (
      <React.Fragment>
        <div className="first">
          {console.log("my name : ", this.state.name)}
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeNamme(event)}
          ></input>
          Nguyen Tien {this.state.name}
        </div>
        <div className="second">Manh dang xem o dau : {this.state.channel}</div>
        <div className="third">
          {/* cách gọi arow function  */}
          <button onClick={() => this.handleClickButton()}>Click me</button>
        </div>
      </React.Fragment>
    );
  }
}
export default Mycomponent;
