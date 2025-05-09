import React from 'react';
import Header from './Header';
import CreateTask from './CreateTask';

const AdminDash = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header />
      <CreateTask />
      
    </div>
  );
};

export default AdminDash;
