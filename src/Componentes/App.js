import React, { Component } from 'react'
import Menu from './Menu'
import Feed from './Feed'
import Subscribe from './Subscribe'
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
                    <Feed/>
                </div>
                <div class="col-3">
                    <Subscribe/>
                </div>
            </div>    
        </div>
    )
  }

export default App