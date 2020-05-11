import { Db, DbSchema, DbQuery } from "ws-remoting/dist/common/Interfaces";

export default class MemDb implements Db {
  schema: DbSchema;
  records: any;
  constructor(schema: DbSchema) {
    this.schema = schema;
    this.records = {};
    for (const col of schema.collections) this.records[col.name] = {};
  }
  getSchema(): DbSchema {
    return this.schema;
  }
  add(collection: string, record: any): Promise<IDBValidKey> {
    this.records[collection][record.id] = record;
    return Promise.resolve(record.id);
  }
  put(collection: string, record: any): Promise<IDBValidKey> {
    this.records[collection][record.id] = record;
    return Promise.resolve(record.id);
  }
  delete(collection: string, id: string): Promise<string> {
    delete this.records[collection][id];
    return Promise.resolve(id);
  }
  query(collection: string, query: DbQuery): Promise<any[]> {
    return Promise.resolve(
      Object.keys(this.records[collection]).map(
        (key) => this.records[collection][key]
      )
    );
  }
  get(collection: string, query: DbQuery): Promise<any> {
    return Promise.resolve(this.records[collection][query.toString()]);
  }
}
