import { useContext, useEffect, useState } from "react";
import AdminDash from "./components/AdminDash";
import EmployeeDash from "./components/EmployeeDash";
import Login from "./components/Login";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState('');

  const authData = useContext(AuthContext)
  console.log(authData)

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin');
    } else if (authData && authData.employee.find((e)=>email ==e.email && e.password)) {
      setUser('employee');
    } else {
      alert('invalid');
    }
  };

  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  }, []);

  

  return (
    <>
      {user === '' && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDash />}
      {user === 'employee' && <EmployeeDash />}
    </>
  );
}

export default App;
