import "./App.css";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";

import { Card } from 'primereact/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function Overview(props) {

  let tasksList = props.tasks.map(item => 
    <Card className="card">
      <button type="button" 
              className="btnDelete"
              onClick={() => props.delTask(item.taskId)}
          ><FontAwesomeIcon icon={faTrash} /></button>
      <label className="labelcheckBox" for={"taskCheck" + item.taskId}>&emsp; {item.taskText} </label>
      <input type="checkbox" 
              id={"taskCheck" + item.taskId} 
              name={"taskCheck" + item.taskId} 
              value={item.taskId} 
              onChange={() => props.toggleTask(item.taskId)}
              className="checkboxTask"
          ></input>
          
    </Card>
  );

    return (
      <div>
          {tasksList.length > 0 ? <h3>List of tasks:</h3> : <h3></h3> }
          <div>
            {tasksList}
          </div>
      </div>
    );
  }
  
  export default Overview;