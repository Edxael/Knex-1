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


        // ---[ '/columInfo' ]-----------------------------------------------
router.route('/columInfo')

.get((req, res) => {  // Get all Records from DB
    console.log("Send all records to FE.")
    db.select().from('Profiles').columnInfo().then((data) => {
        res.send(data)
    }) 
})


        // ---[ '/singers' ]-----------------------------------------------
router.route('/singers')

.get((req, res) => {  // Get all Records from DB
    console.log("Send all records to FE.")
    db.select().from('Profiles').then((data) => {
        res.send(data)
    }) 
})

.post((req, res) => {  // Add One to the Database
    console.log( 'Data from FE:', req.body.name, " - ", req.body.country, " - ", req.body.email )
    db.insert({ name: req.body.name, country: req.body.country, email: req.body.email }).into('Profiles').then((data) => {
        res.send(data)
    }).catch( (error) => { res.send(error) })
})


        // ---[ '//singers/:email' ]-----------------------------------------------
router.route('/singers/:email')    // delete or Full-Update a singer record using 'email' ( URL: http://localhost:8080/api/singers/:email )

.delete( (req, res) => {  
    console.log("Delet User with email: ", req.params.email)
    db.select().from('Profiles').where('email', req.params.email).del().then((data) => {
        console.log("To Delete: ")
        res.send({ success: "Record deleted." })
    }) 
})

.put( (req, res) => {  
    console.log("Update User with email: ", req.params.email)
    console.log("Info: ", req.body.name, " - ", req.body.country, " - ", req.body.email)
    db.select().from('Profiles').where('email', req.params.email).update({ name: req.body.name, country: req.body.country, email: req.body.email }).then((data) => {
        console.log("Record Updated. ")
        res.send({ success: "Record Updated" })
    }) 
})


// ---[ '//singers/:email' ]-----------------------------------------------
router.route('/singers/up/:email')    // delete or Full-Update a singer record using 'email' ( URL: http://localhost:8080/api/singers/:email )

.put( (req, res) => {  
    console.log("Up User with email: ", req.params.email)
    console.log("With data2: ", req.body )
    db.select().from('Profiles').where('email', req.params.email).update(req.body).then((data) => {
        console.log("Record Updated. ")
        res.send({ success: "Record Updated" })
    }) 
})

 


// === [ SERVER LISTENER ]===========================
app.listen((process.env.PORT || 8080), (err) => {
    if(err){ throw err }
    console.log("Server Listening on port: 8080 ....")
})
