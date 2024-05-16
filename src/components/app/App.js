import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthUser from "../authUser/AuthUser";
import { PersonalInfo, Applications, AddedOffices, Users} from "../pages"

const App = () => {
  const [userRole, setUserRole] = useState("U")

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthUser/>}/>
        <Route path="/personal-account/personal-info" element={<PersonalInfo userRole={userRole}/>}/>
        <Route path="/personal-account/personal-applications" element={<Applications userRole={userRole}/>}/>
        <Route path="/personal-account/personal-offices" element={<AddedOffices userRole={userRole}/>}/>
        <Route path="/personal-account/personal-users" element={<Users userRole={userRole}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
