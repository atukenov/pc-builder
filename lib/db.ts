import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
const MONGO_DB = process.env.MONGO_DB;

if (!MONGO_URI) {
  throw new Error(
    "Please define the MONGO_URI environment variable inside .env.local"
  );
}

if (!MONGO_DB) {
  throw new Error(
    "Please define the MONGO_DB environment variable inside .env.local"
  );
}

let cachedClient: mongoose.Connection | null = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await mongoose.connect(MONGO_URI!, {
    dbName: MONGO_DB,
  });

  cachedClient = client.connection;

  console.log("✅ Connected to MongoDB");

  return cachedClient;
}
