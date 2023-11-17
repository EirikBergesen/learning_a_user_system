import './App.css';
import { useState } from 'react';



function GameHand () {
    
        return (
            <div>
                <h1>Hand</h1>
            </div>
        )
    
}

function GameBoard () {

    return (
        <div>
            <h1>interactive</h1>
        </div>
    )
}

function GameInterface( ) {


    return (
        <div>
            <h1>Interface</h1>
            <GameBoard />
            <GameHand />
        </div>
    )
}

function User () {

    return (
        <div>
            <h1>User</h1>
            <GameInterface />
        </div>
    )
}

export default function Game () {

    return (
        <div>
            <h1>Game</h1>
            <User />
        </div>
    )
}