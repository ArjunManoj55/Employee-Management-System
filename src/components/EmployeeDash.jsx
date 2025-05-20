import React from 'react';
import Header from './Header';
import TaskGrid from './TaskGrid';
import TaskList from '../service/TaskList';

const EmployeeDash = ({ handleLogout }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header handleLogout={handleLogout} />
      <TaskGrid /> <br />
      <TaskList />
    </div>
  );
};

export default EmployeeDash;
