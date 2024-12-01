import { connect } from "mongoose";

const connection: { isConnected: number } = { isConnected: 0 };

const dbConnect = async () => {
  if (connection.isConnected) {
    return;
  }
  const db = await connect(process.env.MONGODB_URI!, {
    dbName: "nextjs-dashboard",
  });
  connection.isConnected = db.connections[0].readyState;
};

export default dbConnect;
