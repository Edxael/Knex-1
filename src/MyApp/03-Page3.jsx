import React from 'react'
import axios from 'axios'

export default class extends React.Component{
    state = { name: '', country: '', email: '', show: false, dbtheaders: [] }
    render(){



        const post1 = async () => {
            console.log("--- \n  POST a new Record: \n ")
            await axios.post('http://localhost:8080/api/singers', { name: this.state.name, email: this.state.email, country: this.state.country } )
                .then( (response) => { return response })
                .catch( (error) => { console.log(error) })
            await this.setState({ name: '', email: '', country: '' })
        }





        const getColumInfo = async () => {
            console.log("GCI")
            axios.get('http://localhost:8080/api/columInfo')
            .then( (response) => { 

                console.log(response.data) 

                let tkeys = Object.keys(response.data)
                console.log(tkeys)
                this.setState({ dbtheaders: Object.keys(response.data) })
            
            }).catch( (error) => { console.log(error) })

            this.setState({ show: true })
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

                <hr/>

                <h3>Get Colum-Info:</h3>
                <button onClick={getColumInfo} >GCI</button>

                { this.state.show ? 
                        <div>
                            <br/>

                            <select>
                                { this.state.dbtheaders.map((x) => { return <option key={x} value={ x } >{x}</option> }) }
                            </select>
                        </div> 
                    : 
                        <div>NO</div> 
                }

            </div>
        )
    }
}
