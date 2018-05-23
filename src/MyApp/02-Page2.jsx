import React from 'react'
import axios from 'axios'
import Template from './98-Template'

export default class extends React.Component{
    state = { singers: [] }

    async componentWillMount(){
        let sRecords = await axios.get('http://localhost:8080/api/singers')
            .then( (response) => { return response.data } )
            .catch( (error) => { console.log(error) })

        await console.log(sRecords)
        await this.setState({ singers: sRecords })
    }

    render(){

        return(
            <div>
                <h1>All Records</h1>

                <div>
                    
                    { this.state.singers.map((x) => { return <Template key={x.email} data={x} /> }) }
                    
                    <br/>
                </div>
            </div>
        )
    }
}