import React from 'react'

export default class extends React.Component{
    state = { name: '', country: '', email: '' }

    componentWillMount(){
        const data = this.props.data
        this.setState({ name: data.name, country: data.country, email: data.email })
    }

    render(){
        return(
            <div className="Temp-Cont">

               <input className="Tem-Inp" type="text" placeholder="Name..." value={this.state.name} onChange={ (e) => { this.setState({ name: e.target.value }) } } />
                <br/>
                <input className="Tem-Inp" type="text" placeholder="Country..." value={this.state.country} onChange={ (e) => { this.setState({ country: e.target.value }) } } />
                <br/>
                <input className="Tem-Inp" type="text" placeholder="Email..." value={this.state.email} onChange={ (e) => { this.setState({ email: e.target.value }) } } />
                <br/><br/>

                <div className="Buttons-Cont">
                    <button>Update</button>
                    <button>Delete</button>
                </div>
            </div>
        )
    }
}
