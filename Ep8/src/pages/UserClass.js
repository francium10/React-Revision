/** @format */
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div className="p-3">
        <h1>This is user Class Component </h1>
        <h1>{this.props.name}</h1>
        <h2>Position: Manager</h2>
        <h2>Location: Nyc</h2>
        <h2>Contact:John@gmail.com</h2>
        <h2 onClick={() => {}}>Count={count}</h2>
      </div>
    );
  }
}
export default UserClass;
