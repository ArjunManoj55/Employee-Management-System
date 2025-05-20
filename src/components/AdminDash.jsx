import React from 'react';
import Header from './Header';
import CreateTask from './CreateTask';
import TaskList from '../service/TaskList';

const AdminDash = ({ handleLogout }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header handleLogout={handleLogout} />
      <CreateTask />
      <TaskList />
    </div>
  );
};

export default AdminDash;
