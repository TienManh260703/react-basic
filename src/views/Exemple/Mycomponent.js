import React from "react";

class Mycomponent extends React.Component {
  /**
   * JSX  : Cho phép hàm js trả về html
   * Chỉ trả về 1 phần tử
   * Fragment : thay thế cho div tổng
   * state : : Là 1 Object
   */

  state = {
    name: "Manh",
    channel: "Manh hoc react",
  };
  handOnChangeNamme = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  // click me
  handleClickButton = () => {
    console.log("his");
    alert("click me");
  };
  render() {
    let name = "Mạnh";
    return (
      <React.Fragment>
        <div className="first">
          {console.log("my name : ", this.state.name)}
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handOnChangeNamme(event)}
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
