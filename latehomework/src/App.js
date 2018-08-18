import React, { Component } from "react";
import Card from "./components/Card/Card";
import Wrapper from "./components/Wrapper";
import dogs from "./dogs.json";
import "./App.css";
// import "animate.css";
import Title from "./components/Title/Title";

const introStyle = {
  textAlign: "center",
  fontFamily: "'Baloo Bhai', cursive;"
};

class App extends Component {
  state = {
    dogs
  };

  score = 0;

  Clicked = id => {
    console.log(dogs);
    const dogs = this.state.dogs.map(dog => {
      if (dog.id === id) {
        if (dog.clicked === false) {
          //if new photo click
          dog.clicked = true;
          this.score++;
        } else {
          alert("Wrong doggo! Try again.");
          console.log(dogs);
          // document.getElementById("shake").classList.add("uk-animation-shake");
          // setTimeout(function() {
          //   document
          //     .getElementById("shake")
          //     .classList.remove("uk-animation-shake");
          // }, 500);
          this.resetGame(); //otherwise reset
        }
      } else {
        if (this.score === 12) {
          alert("You're the best hooman!");
          this.resetGame();
        }
      }
      return dog;
    });
    //pushes new photo array
    this.setState({ dogs });
  };

  shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While theres still elements to shuffle...
    while (0 !== currentIndex) {
      // Pick the element remaining...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // swap it
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  resetGame = () => {
    this.score = 0;
    this.state.dogs.map(dog => {
      dog.clicked = false;
      return dog;
    });
  };

  componentDidMount() {}
  render() {
    return (
      <div>
        <Title>Doggo Memory Game! Score:{this.score}</Title>
        <h2 style={introStyle} className="title">
          Doggo Memory Game. Try and remember which doggo
          you've clicked. If you guess the same doggo again, you go back to zero.
        </h2>
        <div id="dogCard">
          <Wrapper>
            {this.shuffle(this.state.dogs).map(dog => (
              <Card
                Clicked={this.Clicked}
                id={dog.id}
                image={dog.image}
                name={dog.name}
              />
            ))}
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default App;