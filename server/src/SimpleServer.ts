import WsDbServer from "ws-remoting/dist/server/WsDbServer";
import * as http from "http";
import MemDb from "./MemDb";

const server = http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(1337);

const dbserver = new WsDbServer(
  [
    new MemDb({
      name: "crm",
      version: 3,
      collections: [
        { name: "person", keyPath: "id", autoIncrement: false },
        { name: "message", keyPath: "id" },
      ],
    }),
  ],
  { server }
);
