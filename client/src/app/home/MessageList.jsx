import React from "react";
import DbQuery from "../../components/DbQuery";
import MessageItem from "./MessageItem";

export default class MessageList extends React.Component {
  render() {
    return <DbQuery collection="message" renderItem={this.renderMessage} />;
  }
  renderMessage = (message) => (
    <MessageItem text={message.text} collection="message" id={message.id} />
  );
}
