import React from "react";
import DB from "../DB";

export default class DbRecord extends React.Component {
  registered = false;
  onUpdate = (record) => {
    const keys = Object.getOwnPropertyNames(record);
    for (const key of keys) {
      this.props.record[key] = record[key];
    }
    this.forceUpdate();
  };

  render() {
    const { collection, record, renderItem } = this.props;
    if (!this.registered) {
      this.registered = true;
      DB.addListener(collection, record.id, this.onUpdate);
    }
    return renderItem(record);
  }

  componentWillUnmount() {
    if (this.registered) {
      DB.removeListener(
        this.props.collection,
        this.props.record.id,
        this.onUpdate
      );
    }
  }
}
