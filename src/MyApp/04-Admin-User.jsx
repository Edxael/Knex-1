import React from 'react'
import axios from 'axios'

export default class extends React.Component{
    state = { show: false, afterselec: false, allSingers: [], s2update: '', dbtheaders: [], edit: false, userData: '', inOut: 'x' }

    async componentWillMount(){
        let sRecords = await axios.get('http://localhost:8080/api/singers')
            .then( (response) => { return response.data } )
            .catch( (error) => { console.log(error) })

        await console.log(sRecords)
        await this.setState({ allSingers: sRecords })
    }

    render(){


        const exe1 = async (e, xval) => {
            e.preventDefault()
            await this.setState({ edit: !this.state.edit })
            await console.log(this.state.edit, this.state.inOut)


            if(this.state.edit){
                console.clear()
                console.log("Edit Mode.")
    
                axios.get('http://localhost:8080/api/columInfo')
                    .then( (response) => { 
                        console.log(response.data) 
                        let tkeys = Object.keys(response.data)
                        console.log(tkeys)
                        this.setState({ dbtheaders: Object.keys(response.data) })
                        this.setState({ show: true })
                    })
                    .catch( (error) => { console.log(error) })
            }else{
                console.clear()
                console.log("The EmailKey: ", this.state.s2update)
                console.log("User Mode: ", this.state.inOut)

                let fullUser = this.state.allSingers.filter((z) => { return z.email === this.state.s2update })
                console.log("FULL User: ", fullUser)
                let tobeud = fullUser[0][this.state.inOut]
                console.log("Value to be Updated: ", tobeud)

                this.setState({ userData: tobeud })
            } 
        }



        const changeDB = async () => {
            console.log("Update width: ", this.state.userData)
           
            axios.put( `http://localhost:8080/api/singers/up/${this.state.s2update}`, { [this.state.inOut] : this.state.userData } )
                .then( (response) => { console.log(" \n Response from the Server: ", response) })
                .catch( (error) => { console.log(error) })

            // window.location.reload()
        }



        const singerSelected = (e) => {
            this.setState({ s2update: e.target.value, afterselec: true }) 
        }

       
        return(
            <div>
                <h1>Update record in DB</h1>
                <p>Select Record:</p>

                <select  onChange={ (e) => { singerSelected(e) } } >
                    <option>Select One</option>
                    { this.state.allSingers.map((x) => { return <option key={x.email} value={ x.email } >{x.name}</option> }) }
                </select>
                <br/><br/>

                
                {   this.state.afterselec ? 
                    <div>

                        {   this.state.s2update ? this.state.allSingers.filter((z) => { return z.email === this.state.s2update })
                                .map((x) => {return <div>
                                                        <div><strong>Name:</strong>{x.name}</div>
                                                        <div><strong>Country:</strong>{x.country}</div>
                                                        <div><strong>Email:</strong>{x.email}</div>
                                                    </div> }) 
                                : null  
                        }

                        <br/>

                        <hr className="contentHR" />
                        <button onClick={ (e) => { exe1(e, this.state.inOut) } } >{ this.state.edit ? "Change to User Mode" : "Change to Edit Mode" }</button>
                        <hr className="contentHR" />

                        {       
                            this.state.edit ? 
                                //=====================================================================================================================
                                <div>
                                    <p>Edit</p>

                                    <p>What doe the input will update</p>

                                    {   
                                        this.state.show ? 
                                            <div>
                                                <br/>

                                                <select onChange={ (e) => { this.setState({ inOut: e.target.value }) } } >
                                                    <option>Select One</option>
                                                    { this.state.dbtheaders.map((x) => { return <option key={x} value={ x } >{x}</option> }) }
                                                </select>
                                            </div> 
                                        : 
                                            <div>NO</div> 
                                    }
                                </div>
                            :   //=====================================================================================================================
                                <div>
                                    <p>User Mode</p>
                                    <br/>

                                    <label>Data to change: {this.state.inOut}</label><br/>
                                    <input type="text" value={this.state.userData} onChange={ (e) => { this.setState({ userData: e.target.value }) } } />
                                    <br/><br/>

                                    <button onClick={changeDB} >Change Data in DB</button>
                                </div>
                            //=====================================================================================================================
                        } 


                    </div>
                    : null
                }
                


            </div>
        )
    }
}



 