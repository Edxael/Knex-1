import React from 'react'
import ImgPNF from './img/err404.png'

export default class extends React.Component{
    render(){
        return(
            <div>
                <h1>Page Not Foud</h1>
                <img src={ImgPNF} alt="Not found"/>
            </div>
        )
    }
}