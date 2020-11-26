import React from 'react';

const List = (props) => {
    console.log(props)
  return (
      <ul class="list">
          {props.tasks.map(task => {
              return <li key={task}>{task}</li>         
          })}
    </ul>
  );
};

export default List;