import React from "react";
import Overview from "./Overview.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      tasks: [], // tasks: [ { taskText: '', taskCompleted: false, taskId: 0 }, ... ]
      currentId: 0
    }

    this.onClick = this.onClick.bind(this); 
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
    this.delTask = this.delTask.bind(this);
  }

  onKeyDown(k) {
    if (k.key === 'Enter'){
      this.onClick();
    } 
  }

  onChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  onClick() {
    if (this.state.text === "") {
      console.log("Empty field");
      return undefined;
    }
    this.setState((currentState)  => ({
          text: '',
          tasks: [...currentState.tasks, {taskText: currentState.text, taskCompleted: false, taskId: currentState.currentId+1}],
          currentId: currentState.currentId + 1
        })
    );
  }

  toggleTask(Id) {
    let tasksList = this.state.tasks;
    let taskIndexToToggle = tasksList.findIndex(task => task.taskId === Id);
    tasksList[taskIndexToToggle].taskCompleted = !tasksList[taskIndexToToggle].taskCompleted;

    this.setState((currentState)  => ({
        tasks: tasksList
      })
    );
  }

  delTask(Id) {
    let tasksList = this.state.tasks;
    let taskIndexToDelete = tasksList.findIndex(task => task.taskId === Id);
    tasksList.splice(taskIndexToDelete, 1);

    this.setState((currentState)  => ({
        tasks: tasksList
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
        <Overview tasks={this.state.tasks} toggleTask={this.toggleTask} delTask={this.delTask} />
      </div>
    );
  }
}

export default App;
