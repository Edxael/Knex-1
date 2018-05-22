import React from 'react'
import axios from 'axios'

export default class extends React.Component{
    render(){

        const getData = () => {
            console.log("----------------------------------- \n  GET all the Records:")

            axios.get('http://localhost:8080/mydb')
                .then( (response) => { return response.data } )
                .then( (data) => { console.log(data) })
                .catch( (error) => { console.log(error) })
        }

        return(
            <div>
                <h1>Page 2</h1>

                <div>
                    <h4>GET ALL</h4>
                    <button onClick={ getData }>GET All Data</button>
                    <br/><br/>
                </div>
            </div>
        )
    }
}