require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const insertData = async (query, values) => {
  const client = await pool.connect();
  try {
    return await client.query(query, values);
  } catch (err) {
    console.error(err);
  } finally {
    client.release();
  }
};

module.exports = {
  insertData
};
