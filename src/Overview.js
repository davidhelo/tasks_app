


function Overview(props) {

  let tasksList = props.tasks.map(item => 
  <div>
    <button type="button" onClick={() => props.delTask(item.taskId)}> X </button>
    <label for={"taskCheck" + item.taskId}>{item.taskText}, is Completed: {item.taskCompleted ? 'true' : 'false'}, Id: {item.taskId}</label>
    <input type="checkbox" 
            id={"taskCheck" + item.taskId} 
            name={"taskCheck" + item.taskId} 
            value={item.taskId} 
            onChange={() => props.toggleTask(item.taskId)}
          ></input>
  </div>
  );

    return (
      <div>
          <h3>List of tasks:</h3>
          <div>
            {tasksList}
          </div>
      </div>
    );
  }
  
  export default Overview;