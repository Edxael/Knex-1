// ===[ DEPENDENCIES ]===============================
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const db = require('./ExpressServerFiles/knex')
 
 
 
// ===[ MIDDLEWARE ]=================================
app.use(express.static(path.join(__dirname, 'build')))
app.use(require('./ExpressServerFiles/headers'))
 
 

 
// ===[ ROUTES ]=====================================
app.get('/ping', (req, res) => {  // Just to test server
 return res.send('pong')
})

app.get('/zyphex', (req, res) => {  // Just to test server
    res.send({ name: "Edmundo" })
})
 
app.get('/', (req, res) => {      // Route to serve build React-App.
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get('/mydb', (req, res) => {  // Just to test server
    db.select().from('Profiles').then((data) => {
        res.send(data)
    })
    
})



 
 
// === [ SERVER LISTENER ]===========================
app.listen((process.env.PORT || 8080), (err) => {
    if(err){ throw err }
    console.log("Server Listening on port: 8080 ....")
})



