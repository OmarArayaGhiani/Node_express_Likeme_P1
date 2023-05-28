const {Pool} = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgresql',
    database: 'likeme',
    allowExitOnIdle: true,
})

const getPosts = async() => {
    const {rows} = await pool.query('SELECT * FROM posts')
    return(rows)
}

const addPost = async(titulo, img, descripcion) => {
    const consulta = 'INSERT INTO posts VALUES (DEFAULT, $1, $2, $3)'
    const values = [titulo, img, descripcion]
    await pool.query(consulta, values)
}

module.exports = {getPosts, addPost}