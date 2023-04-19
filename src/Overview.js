function Overview(props) {
    return (
      <div>
          <h3>List of tasks:</h3>
          <ul>{props.tasks.map(item => <li>{item}</li>)}</ul>
      </div>
    );
  }
  
  export default Overview;