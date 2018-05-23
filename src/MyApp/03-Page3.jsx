import React from 'react'
import axios from 'axios'

export default class extends React.Component{
    state = { name: '', country: '', email: '' }
    render(){

        const post1 = () => {
            console.log("--- \n  POST a new Record: \n ")

            axios.post('http://localhost:8080/api/singers', { name: this.state.name, email: this.state.email, country: this.state.country } )
                .then( (response) => { console.log(" \n Response from the DB-Server: ", response) })
                .catch( (error) => { console.log(error) })

            this.setState({ name: '', email: '', country: '' })
        }

        const getColumInfo = () => {
            console.log("GCI")
            axios.get('http://localhost:8080/api/columInfo')
            .then( (response) => { console.log(response.data) } )
            .catch( (error) => { console.log(error) })
        }

        return(
            <div>
                <h1>Add Record to DataBase.</h1>

                <input className="Tem-Inp" type="text" placeholder="Name..." value={this.state.name} onChange={ (e) => { this.setState({ name: e.target.value }) } } />
                <br/>
                <input className="Tem-Inp" type="text" placeholder="Country..." value={this.state.country} onChange={ (e) => { this.setState({ country: e.target.value }) } } />
                <br/>
                <input className="Tem-Inp" type="text" placeholder="Email..." value={this.state.email} onChange={ (e) => { this.setState({ email: e.target.value }) } } />
                <br/><br/>

                <button onClick={ post1 } >Add Record</button>
                <br/><br/>

                <h3>Get Colum-Info:</h3>
                <button onClick={getColumInfo} >GCI</button>

            </div>
        )
    }
}