import React from "react";
import DB from "../../DB";
export default class MessageBox extends React.Component {
  state = { message: "" };
  render() {
    return (
      <div
        style={{
          position: "fixed",
          bottom: "10px",
          left: "50px",
          right: "50px",
          border: "1px solid #ddd",
          backgroundColor: "#eee",
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="message"
            onChange={this.onMessageChange}
            value={this.state.message}
            placeholder="Type your message and hit Enter"
            style={{ width: "98%", padding: "10px", border: "none" }}
          />
        </form>
      </div>
    );
  }

  onMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    DB.add("message", { text: this.state.message });
    this.setState({ message: "" });
  };
}
