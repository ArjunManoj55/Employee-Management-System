import { useEffect, useState } from "react";
import AdminDash from "./components/AdminDash";
import EmployeeDash from "./components/EmployeeDash";
import Login from "./components/Login";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

function App() {

  // const [user, setUser] = useState('')

  const handleLogin = (email, password)=> {
   if(email == 'admin@example.com@' && password ==123) {
    console.log('this is admin')
   }else{
    alert("invalid")
   }
  }
  
  handleLogin('admin@example.com@',123)
  
  useEffect(()=> {
    setLocalStorage()
    getLocalStorage()
  })

  return (
    <>
     <Login handleLogin={handleLogin} />
     {/* <EmployeeDash /> */}
     {/* <AdminDash /> */}

    </>
  )
}

export default App
