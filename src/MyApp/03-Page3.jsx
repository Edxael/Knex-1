import React from 'react'

export default class extends React.Component{
    state = { name: '', country: '', email: '' }
    render(){

        const addRecord = () => {
            console.log('Add Record...')
        } 

        return(
            <div>
                <h1>Add Record to DataBase</h1>

                <input type="text" placeholder="Name..." value={this.state.name} onChange={ (e) => { this.setState({ name: e.target.value }) } } />
                <br/>
                <input type="text" placeholder="Country..." value={this.state.country} onChange={ (e) => { this.setState({ country: e.target.value }) } } />
                <br/>
                <input type="text" placeholder="Email..." value={this.state.email} onChange={ (e) => { this.setState({ email: e.target.value }) } } />
                <br/><br/>

                <button onClick={ addRecord } >Add Record</button>

            </div>
        )
    }
}