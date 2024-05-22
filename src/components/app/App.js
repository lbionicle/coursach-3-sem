import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PersonalInfo, Applications, AddedOffices, Users, MainPage, AuthPage} from "../pages"

const App = () => {
  
  const [userRole, setUserRole] = useState("Usr")

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage/>}/>
        <Route path="/main-page" element={<MainPage/>}/>
        <Route path="/personal-account/personal-info" element={<PersonalInfo userRole={userRole}/>}/>
        <Route path="/personal-account/personal-applications" element={<Applications userRole={userRole}/>}/>
        <Route path="/personal-account/personal-offices" element={<AddedOffices userRole={userRole}/>}/>
        <Route path="/personal-account/personal-users" element={<Users userRole={userRole}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
