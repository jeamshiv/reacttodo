import React, { Component } from 'react'

export default class Footer extends Component {
    render() {

        return (
            <div className="bg-dark footer py-2">
               <p className="text-center text-white">Copyright &copy; Jeamshiv {(new Date().getFullYear())}</p> 
            </div>
        )
    }
}
