import React, { Component } from 'react'
import Menu from './Menu'
import Muro from './Muro'
import Suscribete from './Suscribete'
import App from '../App'


function Container() { //papa que tiene los 3 componentes
    return (
        <div class="container">
            <App/>
            <div class="row">
                <div class="col-3">
                    <Menu/>
                </div>
                <div class="col-6">
                    <Muro/>
                </div>
                <div class="col-3">
                    <Suscribete/>
                </div>
            </div>    
        </div>
    )
  }

export default Container