import React from "react";
import Overview from "./Overview.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      tasks: []
    }

    this.onClick = this.onClick.bind(this); 
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(k) {
    if (k.key === 'Enter'){
      this.onClick();
    } 
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  onClick() {
    if (this.state.text === "") {
      console.log("Empty field");
      return undefined;
    }
    this.setState((currentState)  => ({
          tasks: [...currentState.tasks, currentState.text],
          text: ''
        })
    );
  }

  render() {
    return (
      <div>
        <h1>Tasks list:</h1>
        <label htmlFor="txtNewTask"></label>
          <input 
            id="txtNewTask" 
            type="text" 
            placeholder="Enter new task..." 
            value={this.state.text}
            onKeyDown={this.onKeyDown}
            onChange={this.onChange}>
          </input>
          <button 
            id="txtNewTask" 
            type="button" 
            onClick={this.onClick}
            >Add task</button> 
        <hr></hr>
        <Overview tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
