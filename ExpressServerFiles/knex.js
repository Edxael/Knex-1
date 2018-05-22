const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        database: 'Singers1',
        user: 'postgres',
        password: 'hamasak1'
    }
})

module.exports = knex









// The information on the .env in 1A
// PORT=3000
// NODE_ENV=production
// DATABASE_NAME=OneApp
// DATABASE_USER=postgres
// DATABASE_PASS=hamasak1
// PEPPER=SvQY1HhOYHi75SFV64OxsZS2X1zWDC1mWU0/2oUv0RzgRMRmLljWqmk2bN7Fi4pFKxlqMk9bIkXmV7qshSaxpA==



// module.exports = {
//     development: {
//         client: 'pg',
//         connection: 'postgress://localhost/Singers1'
//     }
// }