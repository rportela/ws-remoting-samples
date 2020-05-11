import React from "react";
import MessageBox from "./MessageBox";
import MessageList from "./MessageList";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            padding: "50px",
          }}
        >
          <h1>This is our first sample</h1>
          <p>
            Feel free to open 3 or more browsers and start typing on the little
            box there
          </p>
          <MessageList />
        </div>
        <MessageBox />
      </div>
    );
  }
}
