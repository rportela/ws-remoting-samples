import WsDb from "ws-remoting/dist/client/WsDb";

const DB = new WsDb("ws://localhost:1337", "crm");

export default DB;
