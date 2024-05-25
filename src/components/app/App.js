import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PersonalInfo, Applications, AddedOffices, Users, MainPage, AuthPage } from "../pages";

const App = () => {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    if (storedRole) {
      setUserRole(storedRole);
    }
  }, []);

  const handleLogin = (role) => {
    localStorage.setItem("userRole", role);
    setUserRole(role);
  };

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("token");
    setUserRole(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage onLogin={handleLogin} />} />
        <Route path="/main-page" element={<MainPage userRole={userRole}/>} />
        <Route path="/personal-account/personal-info" element={<PersonalInfo onLogout={handleLogout} userRole={userRole} />} />
        <Route path="/personal-account/personal-applications" element={<Applications onLogout={handleLogout} userRole={userRole} />} />
        <Route path="/personal-account/personal-offices" element={<AddedOffices onLogout={handleLogout} userRole={userRole} />} />
        <Route path="/personal-account/personal-users" element={<Users onLogout={handleLogout} userRole={userRole} />} />
      </Routes>
    </Router>
  );
};

export default App;
