const express = require("express")
const db = require("../database/db")

const router = express.Router()

// GET /posts
router.get("/", (req, res) => {
  const sql = `SELECT * FROM posts`
  db.query(sql, (err, results) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(results)
    res.json(results)
  })
})

// GET /posts/:id
router.get("/:id", (req, res) => {
  const { id } = req.params
  const sql = `SELECT * FROM posts WHERE id = ?`
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(result)
    res.json(result)
  })
})

// POST/INSERT /posts
router.post("/", (req, res) => {
  const post = req.body
  const sql = `INSERT INTO posts (title, body) VALUES (?, ?)`
  db.query(sql, [post.title, post.body], (err, result) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(result)
    res.json(result)
  })
})

// UPDATE/PUT /posts/:id
router.put("/:id", (req, res) => {
  const { id } = req.params
  const post = req.body
  const { title, body } = post
  const sql = `UPDATE posts SET title = ?, body = ? WHERE id = ?`
  db.query(sql, [title, body, id], (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(result)
    res.json(result)
  })
})

// DELETE /posts/:id
router.delete("/:id", (req, res) => {
  const { id } = req.params
  const sql = `DELETE FROM posts WHERE id = ?`
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(result)
    res.json(result)
  })
})

module.exports = router
