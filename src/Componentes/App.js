import React, { Component } from 'react'
import Menu from './Menu'
import Muro from './Muro'
import Suscribete from './Suscribete'
import MiniTweet from '../Minitweet'


function App() { //papa que tiene los 3 componentes
    return (
        <div class="container">
            <MiniTweet/>
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

export default App