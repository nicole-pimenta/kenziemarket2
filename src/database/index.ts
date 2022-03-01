import { createConnection } from "typeorm";

async function connection() {
  try {
    console.log("Connecting to Database");
    return await createConnection();
  } catch (e) {
    console.log(e);
  }
}

export default connection;
