import React from 'react';

const Header = () => {
  return (
    <div className="flex items-end justify-between px-6 py-4 bg-white shadow-md rounded-b-lg">
      <h1 className="text-2xl font-semibold text-gray-800 leading-tight">
        Hello, <br />
        <span className="text-blue-600">Arjun</span>
      </h1>
      <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
        Log Out
      </button>
    </div>
  );
};

export default Header;
