import React from "react";

const Overview = (props) => {
  const { tasks, deleteTask } = props;

  return (
    <ul>
      {tasks.map((task, index) => {
       return <li key={task.id}>{index}. {task.text}<button id={index} onClick={deleteTask}>Delete</button></li>;
      })}
    </ul>
  );
};

export default Overview;