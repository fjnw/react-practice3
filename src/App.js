import React, { Component } from 'react';
import ValidationComponent from "./Components/ValidationComponent/ValidationComponent";
import CharComponent from "./Components/CharComponent/CharComponent";


class App extends Component {

  state = {
    text: []
  }

  inputUpdateHandler = (event) => {
    // const val = [...event.target.value]
    const val = event.target.value.split("")

    this.setState({text: val}, function () {
      console.log(this.state.text)
    })
  }

  render() {

    


    return (
      <div className="App">
        <input 
          type="text" 
          onChange={(event) => this.inputUpdateHandler(event)} />

        
        
      </div>
    );
  }
}

export default App;
