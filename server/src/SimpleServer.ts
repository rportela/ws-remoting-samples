import RemoteDbServer from "ws-remoting/dist/server/RemoteDbServer";
import { MemoryDb } from "ws-remoting/dist/common/MemoryDb";

const dbserver = new RemoteDbServer([
  new MemoryDb({
    name: "crm",
    version: 3,
    collections: [
      { name: "person", keyPath: "id", autoIncrement: false },
      { name: "message", keyPath: "id" },
    ],
  }),
]);
dbserver.listen(1337);
