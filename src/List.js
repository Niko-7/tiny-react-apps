import React from 'react';

const List = (props) => {
  return (
    <ul class="list">
      {props.tasks.map((task) => {
        return (
          <li key={task}>
            <button class="button" onClick={() => props.removeTask(task)}>
              X
            </button>
            <p>{task}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
