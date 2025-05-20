import { useContext, useState, useEffect } from "react";
import AdminDash from "./components/AdminDash";
import EmployeeDash from "./components/EmployeeDash";
import Login from "./components/Login";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(""); // "admin" or "employee"
  const authData = useContext(AuthContext);

  // 🔁 Check if someone is already logged in
  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      setUser(savedUser); // "admin" or "employee"
    }
  }, []);

  // ✅ Save login info
  const handleLogin = (email, password) => {
    const admin = authData.admins?.find(
      (a) => a.email === email && a.password === password
    );

    if (admin) {
      localStorage.setItem("loggedInUser", "admin");
      localStorage.setItem("loggedInEmail", admin.email);
      setUser("admin");
      return;
    }

    const employee = authData.employees?.find(
      (e) => e.email === email && e.password === password
    );

    if (employee) {
      localStorage.setItem("loggedInUser", "employee");
      localStorage.setItem("loggedInEmail", employee.email);
      setUser("employee");
      return;
    }

    alert("Invalid credentials");
  };

  // 🔓 Logout clears everything
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInEmail");
    setUser("");
  };

  return (
    <>
      {user === "" && <Login handleLogin={handleLogin} />}
      {user === "admin" && (
        <AdminDash handleLogout={handleLogout} userType={user} />
      )}
      {user === "employee" && (
        <EmployeeDash handleLogout={handleLogout} userType={user} />
      )}
    </>
  );
}

export default App;
