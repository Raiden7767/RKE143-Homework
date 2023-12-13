const dotenv = require('dotenv');
dotenv.config();
const { Pool } = require('pg');

const itemsPool = new Pool({
    connectionString: process.env.DBConnectionsString,
    ssl: {
        rejectUnauthorized: false,
    },
});

module.exports = itemsPool;