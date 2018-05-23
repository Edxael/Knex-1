import React from 'react'
import axios from 'axios'

export default class extends React.Component{
    state = { name: '', country: '', email: '', keyEmail: '' }

    componentWillMount(){
        const data = this.props.data
        this.setState({ name: data.name, country: data.country, email: data.email, keyEmail: data.email })
    }

    render(){

        const deleteRecord = () => {
            console.log("Delete....")
            axios.delete( `http://localhost:8080/api/singers/${this.state.keyEmail}` )
                .then( (response) => { console.log(" \n Response from the Server: ", response) })
                .catch( (error) => { console.log(error) })

                window.location.reload()
        }

        const updateRecord = () => {
            console.log("Update....")
            axios.put( `http://localhost:8080/api/singers/${this.state.keyEmail}`, { name: this.state.name, country: this.state.country, email: this.state.email } )
                .then( (response) => { console.log(" \n Response from the Server: ", response) })
                .catch( (error) => { console.log(error) })

            window.location.reload()
        }

        return(
            <div className="Temp-Cont">

               <input className="Tem-Inp" type="text" placeholder="Name..." value={this.state.name} onChange={ (e) => { this.setState({ name: e.target.value }) } } />
                <br/>
                <input className="Tem-Inp" type="text" placeholder="Country..." value={this.state.country} onChange={ (e) => { this.setState({ country: e.target.value }) } } />
                <br/>
                <input className="Tem-Inp" type="text" placeholder="Email..." value={this.state.email} onChange={ (e) => { this.setState({ email: e.target.value }) } } />
                <br/><br/>

                <div className="Buttons-Cont">
                    <button onClick={ updateRecord } >Update</button>
                    <button onClick={ deleteRecord } >Delete</button>
                </div>
            </div>
        )
    }
}

