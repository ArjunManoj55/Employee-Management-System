import React from 'react';

const TaskGrid = () => {
  const items = [
    { label: 'Tasks', count: 12, color: 'bg-blue-500' },
    { label: 'Completed', count: 8, color: 'bg-green-500' },
    { label: 'Accepted', count: 4, color: 'bg-yellow-500' },
    { label: 'Failed', count: 2, color: 'bg-red-500' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-6">
      {items.map((item, index) => (
        <div
          key={index}
          className={`rounded-xl text-white p-6 flex flex-col justify-between ${item.color} shadow-md`}
        >
          <span className="text-lg font-medium">{item.label}</span>
          <span className="text-3xl font-bold">{item.count}</span>
        </div>
      ))}
    </div>
  );
};

export default TaskGrid;
