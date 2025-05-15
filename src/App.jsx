import { useContext, useState } from "react";
import AdminDash from "./components/AdminDash";
import EmployeeDash from "./components/EmployeeDash";
import Login from "./components/Login";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState('');
  const authData = useContext(AuthContext);

  const handleLogin = (email, password) => {
    // Check admin
    if (
      authData.admins.find(
        (admin) => admin.email === email && admin.password === password
      )
    ) {
      setUser('admin');
      return;
    }

    // Check employee
    if (
      authData.employees.find(
        (employee) => employee.email === email && employee.password === password
      )
    ) {
      setUser('employee');
      return;
    }

    alert('Invalid credentials');
  };

  return (
    <>
      {user === '' && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDash />}
      {user === 'employee' && <EmployeeDash />}
    </>
  );
}

export default App;
