import React, { Component } from 'react';
import ValidationComponent from "./Components/ValidationComponent/ValidationComponent";
import CharComponent from "./Components/CharComponent/CharComponent";


class App extends Component {

  state = {
    text: [],
    textLength: null
  }

  inputUpdateHandler = (event) => {
    // const val = [...event.target.value]
    const val = event.target.value.split("")

    this.setState({text: val}, function () {
      this.setState({textLength: this.state.text.length}, function() {
        console.log(this.state.text + this.state.textLength)
      })
    })

  }

  render() {

    


    return (
      <div className="App">
        <input type="text" onChange={(event) => this.inputUpdateHandler(event)} />

        <ValidationComponent  length={this.state.textLength}/>
        
      </div>
    );
  }
}

export default App;
