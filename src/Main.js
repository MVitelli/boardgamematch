import React, { Component } from 'react';
import GameCard from './GameCard';

class Main extends Component {
    constructor(props) {
        super(props)
        this.clientId = 'leMf1XL9M0';
        this.state = {
            games: [],
            error: null
        }
    }

    componentDidMount() {
        fetch(`https://api.boardgameatlas.com/api/search?order_by=popularity&limit=10&client_id=${this.clientId}`)
            .then(res => res.json())
            .then(result => {
                console.log('lista de juegos', result.games)
                this.setState({
                    games: result.games
                })
            })
    }

    render() {
        return (
            <div>{this.fetchGames()}</div>
        )
    }

    fetchGames = () => {
        if (!this.state.games) return <h1>No hay juegos</h1>;
        return this.state.games.map((game, index) => {
            return (
                <div key={index}>
                    <br ></br>
                    <GameCard gameInfo={game}></GameCard>
                </div>
            )
        })
    }
}

export default Main;