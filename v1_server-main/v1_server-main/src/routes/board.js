const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    res.json(result);
})

router.post('/', (req, res) => {
    const {title, description, name} = req.body;

})

router.get("/:", async(req,res) => {
    const board = req.params;
});

module.exports = router;

/* localhost:3000/board를 쳤을때 router들이 실행되도록
get방식으로 board 내의 정보들이 나오도록
post방식으로 json을 사용하여 insert
put 방식으로 json을 사용하여 update
delete방식으로 id의 게시판이 사라지도록
어떻게 하는거지..? */