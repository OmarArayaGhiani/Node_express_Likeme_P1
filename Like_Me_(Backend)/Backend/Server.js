const express = require('express')
const cors = require('cors')
const {getPosts, addPost} = require('./Consultas')
const app = express()
const port = 3000

app.listen(port, console.log(`Servidor conectado en puerto ${port}`))
app.use(express.json())
app.use(cors())

app.get('/posts', async(req, res) => {
  try {
    const posts = await getPosts();
    res.json(posts)
  }
  catch (error){
    console.log(error)
  }
})

app.post('/posts', async(req, res) => {
  try{
    const {titulo, url, descripcion} = req.body
    const img = url
    await addPost(titulo, img, descripcion)
    res.send("Post agregado")
  }
  catch (error){
    console.log(error)
  }
})