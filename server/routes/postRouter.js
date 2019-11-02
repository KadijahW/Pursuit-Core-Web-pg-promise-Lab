const express = require('express');
const router = express.Router();

const pgp = require('pg-promise')()
const connectionString ="postgres://localhost:5432/pgpromise"
const db = pgp(connectionString);

router.get('/all', async (req, res) => {
try{
    let allPost = await db.any("SELECT * FROM posts")
    res.json({
        posts: allPost,
        message: "Success"
    })
}catch(error){
    res.json({
        message: "Error"
    })
}
})

router.get('/:user_id', async (req, res) => {
try{
        let getUser = await db.any(`SELECT * FROM users WHERE id = ${req.params.user_id}`)
        res.json({
            user: getUser,
            message: "Success"
    })
}catch(error){
        res.json({
            message: "Error"
        })
    }
})

router.post('/register', async (req,res) => {
    try{
        let insertQuery = `INSERT into posts(poster_id, body)
        VALUES($1, $2)`

        await db.none(insertQuery, [req.body.poster_id, req.body.body])
        res.json({
            post: req.body,
            message:"posted"
        })
    }catch(error){
        res.json({
            message:error
        })
    }
})

module.exports = router;