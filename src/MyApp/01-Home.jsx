import React from 'react'

export default class extends React.Component{
    render(){
        return(
            <div>
                <h1>Home Page</h1>

                <p>Testing page for a CRUD App. using:</p>
                
                <div className="listCont">
                    <ul>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Knex.js</li>
                        <li>PostgreSQL 9.6</li>
                        <li>PG-Admin 4</li>
                    </ul>
                </div>
            </div>
        )
    }
}