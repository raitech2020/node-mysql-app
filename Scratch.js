app.get("/addpost", (req, res) => {
  const post = {
    title: "post 2",
    body: "This is post 2",
  }
  const sql = `INSERT INTO posts (title, body) VALUES (?, ?)`
  db.query(sql, [post.title, post.body], (err, result) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(result)
    res.send("post 1 added")
  })
})

app.get("/updatepost/:id", (req, res) => {
  const { id } = req.params
  const title = `updated title for id ${id}`
  const sql = `UPDATE posts SET title = ? WHERE id = ?`
  db.query(sql, [title, id], (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(result)
    res.json(result)
  })
})
