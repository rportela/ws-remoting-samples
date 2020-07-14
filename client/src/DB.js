import RemoteDbs from "ws-remoting/dist/client/RemoteDbs";

const DB = new RemoteDbs("ws://localhost:1337");

export default DB;
