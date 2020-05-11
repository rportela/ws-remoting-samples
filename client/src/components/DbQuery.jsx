import React from "react";
import DbRecord from "./DbRecord";
import DB from "../DB";
import { Spin, Empty } from "antd";
import { WsDbActions } from "ws-remoting/dist/common/WsDbInterfaces";

export default class DbQuery extends React.Component {
  state = { records: null };
  query = null;
  receiveRecords = (records) => {
    DB.addListener(
      this.props.collection,
      WsDbActions.INSERTED,
      this.recordAdded
    );
    DB.addListener(
      this.props.collection,
      WsDbActions.DELETED,
      this.recordDeleted
    );
    const { renderItem, collection } = this.props;
    this.setState({
      records: records.map((record, i) => (
        <DbRecord
          key={i}
          collection={collection}
          record={record}
          renderItem={renderItem}
        />
      )),
    });
  };

  recordAdded = (record) => {
    const { records } = this.state;
    const { renderItem, collection } = this.props;
    console.log("we have a record event", record);
    records.push(
      <DbRecord
        key={records.length}
        collection={collection}
        record={record}
        renderItem={renderItem}
      />
    );
    this.forceUpdate();
    window.scrollTo(0, 100000);
  };

  recordDeleted = (id) => {
    const { records } = this.state;
    for (let i = 0; i < records.length; i++) {
      if (id === records[i].props.record.id) {
        records.splice(i, 1);
        this.forceUpdate();
        return;
      }
    }
  };

  render() {
    const {
      collection,
      query,
      loadingView = <Spin />,
      emptyView = <Empty />,
    } = this.props;
    const { records } = this.state;
    if (!this.query) {
      this.query = DB.query(collection, query).then(this.receiveRecords);
    }
    if (!records) return loadingView;
    else if (records.length === 0) return emptyView;
    else return records;
  }

  componentWillUnmount() {
    DB.removeListener(
      this.props.collection,
      WsDbActions.INSERTED,
      this.recordAdded
    );
  }
}
