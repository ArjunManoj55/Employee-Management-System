import React, { useState } from 'react';

const Login = ({handleLogin}) => {

  console.log(handleLogin)



    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e)=> {
        
        e.preventDefault()
        handleLogin(email,password) //this will be passed to parent which is app.jsx
        console.log("submitted")
    }


  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Log In</h2>
        <form className="flex flex-col gap-4"
        onSubmit={(e)=> {
            handleSubmit(e)
        }}>
          <input
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
            }}
            type="email"
            placeholder="Email"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          } }
            type="password"
            placeholder="Password"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
