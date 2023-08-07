const express = require('express');
const router = express.Router();
/* const db = require("../database/database"); 
database..?*/

router.get('/',(req, res) => {
    res.json(result);
})

/* router.get("/",(req, res) => {
    try {const sql = await db.query("select * from board");
    const [result] = sql;
    res.json(result);} catch(e) {
        console.log(e);
        res.send(500);
    }
}); */

router.post('/', (req, res) => {
    const {title, description, name} = req.body;

})

/* router.post("/", async (req, res) => {
    const { title, description, name } = req.body;
    try {const post = "insert into board(title, description, name, date, view) valuse(?, ?, ?, now(), 0)";
    db.query(post,[title, description, name]);
    res.send(200);} catch(err{
        console.log(err);
        res.send(500);
    })
}); */

router.get("/:", async(req,res) => {
    const board = req.params;
});

/* router.get("/:", async(req,res) => {
    const board = req.params;
}); */

module.exports = router;

/* localhost:3000/board를 쳤을때 router들이 실행되도록
get방식으로 board 내의 정보들이 나오도록
post방식으로 json을 사용하여 insert
put 방식으로 json을 사용하여 update 이건 뭘까..
delete방식으로 id의 게시판이 사라지도록
어떻게 하는거지..? */