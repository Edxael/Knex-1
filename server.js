// ===[ DEPENDENCIES ]===============================
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const db = require('./ExpressServerFiles/knex')

const router = express.Router() 
 
 
 
// ===[ MIDDLEWARE ]=================================
app.use(express.static(path.join(__dirname, 'build')))
app.use(require('./ExpressServerFiles/headers'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
 
 

 
// ===[ ROUTES ]=====================================
app.get('/', (req, res) => {      // Route to serve build React-App.
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

        // ---[ API ]---

app.use('/api', router)      // all of our routes will be prefixed with /api
router.route('/singers')

.get((req, res) => {  // Get all Records from DB
    console.log("Send all records to FE.")
    db.select().from('Profiles').then((data) => {
        res.send(data)
    }) 
})

.post((req, res) => {  // Add One to the Database

    console.log( 'Data from FE:', req.body.name, " - ", req.body.country, " - ", req.body.email )

    // db.select().from('Profiles')
    db.insert({ name: req.body.name, country: req.body.country, email: req.body.email }).into('Profiles').then((data) => {
        res.send(data)
    }) 
})


 
// === [ SERVER LISTENER ]===========================
app.listen((process.env.PORT || 8080), (err) => {
    if(err){ throw err }
    console.log("Server Listening on port: 8080 ....")
})



