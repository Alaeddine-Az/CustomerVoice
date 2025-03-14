// db.js - SQLite Database Setup
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:'); // In-memory database for testing

db.serialize(() => {
    db.run("CREATE TABLE interviews (id INTEGER PRIMARY KEY, transcript TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)");
});

module.exports = db;
