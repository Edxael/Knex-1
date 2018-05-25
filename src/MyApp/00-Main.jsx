import React from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import './css/style.css'
 
import Home from './01-Home'
import Page2 from './02-Page2'
import Page3 from './03-Page3'
import AdmUsr from './04-Admin-User'
import Page99 from './99-Page'
 
 
export default class extends React.Component{
    render(){
 
        return(
            <HashRouter>
                <div className="MainContainer">
            
                    <div className="menu1">
                        <Link className="menuButton" to="/">HOME</Link>
                        <Link className="menuButton" to="/2">All Records</Link>
                        <Link className="menuButton" to="/3">Add Record</Link>
                        <Link className="menuButton" to="/4">Admin-User</Link>
                    </div>
            
                    <hr/>

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/2" component={Page2}/>
                        <Route path="/3" component={Page3}/>
                        <Route path="/4" component={AdmUsr}/>
                        <Route component={Page99}/>
                    </Switch>

                    <br/>
                    <hr/>
                    <div>By: Edmundo</div>
            
                </div>
            </HashRouter>
        )
    }
}
