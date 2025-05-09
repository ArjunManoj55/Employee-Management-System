import React from 'react';

const TaskList = () => {
  const tasks = [
    { name: 'Task One', color: 'bg-blue-200' },
    { name: 'Task Two', color: 'bg-green-200' },
    { name: 'Task Three', color: 'bg-yellow-200' },
    { name: 'Task Four', color: 'bg-red-200' },
  ];

  return (
    <div className="p-6 space-y-4">
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg shadow-sm ${task.color}`}
        >
          {task.name}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
