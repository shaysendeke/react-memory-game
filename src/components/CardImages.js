import React, { Component } from "react";
import Card from "./Card";
import "./cardStyle.css";
export default class CardImages extends Component {
  state = {
    timer: 0,
    cards: [
      {cardBack: "click to reveal", cardFront: 1, clicked: false,},
      {cardBack: "click to reveal", cardFront: 2, clicked: false,},
      {cardBack: "click to reveal", cardFront: 3, clicked: false, },
      {cardBack: "click to reveal", cardFront: 4, clicked: false, },
      {cardBack: "click to reveal", cardFront: 1, clicked: false, },
      {cardBack: "click to reveal", cardFront: 2, clicked: false, },
      {cardBack: "click to reveal", cardFront: 3, clicked: false, },
      {cardBack: "click to reveal", cardFront: 4, clicked: false, },
    ],
  };
  componentDidMount() {
    this.startTimer();
    // this.shuffleCards()
  }
  startTimer = () => {
    setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);
  };

  shuffleCards = () => {
    for (let i = this.state.cards.length-1; i > 0; i++) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [this.state.cards[i], this.state.cards[randomIndex]] = [this.state.cards[randomIndex], this.state.cards[i]];
    }
}




  render() {
    
    
    const flip = () => {
      console.log(this.state.timer, this.state.cards)
      ;
      // change the card content after clicking on the button
    };
    return (
      <div className="main">
        <div className="cardsDiv">
          {this.state.cards.map((card, i) => (
            <p onClick={flip} className="cards" key={i}>
              {card.clicked === false ? card.cardBack : card.cardFront} 
            </p>
          ))}
        </div>

        <div className="timerDiv"> 
          <p>Time is: {this.state.timer} sec</p>
        </div>
      </div>
    );
  }
}


