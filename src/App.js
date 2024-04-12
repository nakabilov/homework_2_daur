import { Component } from "react";
import "./App.css";
import Round from "./components/Round/Round";

const RandomInteger = (min, max) => {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

class App extends Component {
  state = {
    circle: [
      { number: RandomInteger(1, 100) },
      { number: RandomInteger(1, 100) },
      { number: RandomInteger(1, 100) },
      { number: RandomInteger(1, 100) },
      { number: RandomInteger(1, 100) },
    ],
  };

  
  changeNumber = () => {
    let circle = [...this.state.circle];
  
    circle.forEach(item => {
      item.number = RandomInteger(1, 100);
    });
  
    let arrNum = circle.map(item =>item.number);
  
    arrNum.sort((a, b) => a - b);
    console.log(arrNum);
    
    circle.forEach((item, index) => {
      item.number = arrNum[index];
    });
    this.setState({ circle });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.changeNumber} className="App-btn">Loto</button>
        <Round number={this.state.circle[0].number} />
        <Round number={this.state.circle[1].number} />
        <Round number={this.state.circle[2].number} />
        <Round number={this.state.circle[3].number} />
        <Round number={this.state.circle[4].number} />
      </div>
    );
  }
}

export default App;
