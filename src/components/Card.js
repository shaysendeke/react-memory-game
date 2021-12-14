import React, { Component } from 'react'
// import * as style from './movie.module.css'
// import CardImages  from "./components"
import CardImages from './CardImages'

export default class Card extends Component {
    render() {
        return (
            <div >
                <h4> {this.cards.num}</h4>
            </div>
        )
    }
}
