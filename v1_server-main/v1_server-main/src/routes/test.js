const express = require("express");
const router = express.Router();
const db = require("../database/database");

router.get("/",(req, res) => {
    const {result} = db.query("select * from board");
    res.json(result);
});

module.exports = router;