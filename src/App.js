import React, { Component } from 'react';
import ValidationComponent from "./Components/ValidationComponent/ValidationComponent";
import CharComponent from "./Components/CharComponent/CharComponent";


class App extends Component {

  state = {
    text: "",
    textLength: null
  }

  inputUpdateHandler = (event) => {
    let val = event.target.value
    let len = val.length
    this.setState({text:val, textLength:len})
  }

  deleteComponent = (index) => {
    let str = this.state.text.split('');
    str.splice(index,1);
    this.setState({text:str.join('')})
  }


  render() {
    let characters = null;
    let stringArray = this.state.text.split('');

    if (this.state.textLength) {
      characters = (
        <div>
          {stringArray.map((letter, index) => {
            return <CharComponent 
              click={this.deleteComponent.bind(this,index)}
              value={letter}
              key={index} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <input type="text" onChange={(event) => this.inputUpdateHandler(event)} />
        <ValidationComponent  length={this.state.textLength}/>
        {characters}
      </div>
    );

  }
}

export default App;