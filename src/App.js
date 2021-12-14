import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import CardImages from './components/CardImages';

const numbersCards= [
  {"num": "1"},
  {"num": "2"},
  {"num": "3"}

]

function App() {

  // const shuffleCards = () => {
  //   const shuffleCards = [...numbersCards, ...numbersCards]
  //   .sort(() => Math.random() -0.5)
  // }
  return (
    <div className="App">
      <header className="App-header">
       <p>Next Generation Memory Game</p>
       {/* <button>New Game</button> */}
       {/* <image src="./public/deer.webp"></image> */}
       {/* <Card card={this.card}/> */}
       {/* <Card /> */}
      </header>
      <CardImages/>
      {/* <CardImages /> */}
    </div>
  );
}

export default App;
