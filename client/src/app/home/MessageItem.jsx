import React from "react";
import DB from "../../DB";

export default class MessageItem extends React.Component {
  state = { editing: false };
  render() {
    const { text } = this.props;
    return (
      <div style={{ padding: "5px", borderBottom: "1px solid #ccc" }}>
        <button style={{ float: "right" }} onClick={this.deleteMessage}>
          X
        </button>
        {this.state.editing ? (
          <input type="text" defaultValue={text} onBlur={this.endEdit} />
        ) : (
          <div onClick={this.beginEdit}>{text}</div>
        )}
      </div>
    );
  }

  beginEdit = () => this.setState({ editing: true });

  
  endEdit = (event) => {
    DB.put(this.props.collection, {
      id: this.props.id,
      text: event.target.value,
    });
    this.setState({ editing: false });
  };

  deleteMessage = () => {
    DB.delete(this.props.collection, this.props.id);
  };
}
