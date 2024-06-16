import { connect, Connection } from "mongoose";

let cachedConnection: Connection | null = null;

const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
const cluster = process.env.DATABASE_CLUSTER;
const dbname = process.env.DATABASE_NAME;

const MONGODB_URI = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

async function connectDB() {
  if (cachedConnection) {
    console.log("Using cached db connection");
    return cachedConnection;
  }

  try {
    const cnx = await connect(MONGODB_URI);
    cachedConnection = cnx.connection;
    console.log("MongoDB is connected");
    return cachedConnection;
  } catch (error) {
    console.error(error);
  }
}

export default connectDB;
