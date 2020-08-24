import React from 'react'
import {useParams} from 'react-router-dom'

function GameDescription() {
    let {gameId} = useParams();
    return (
        <div>
            <h1>Game {gameId}</h1>
        </div>
    )
}

export default GameDescription;
