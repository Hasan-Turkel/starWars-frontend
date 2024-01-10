import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Navbar from "../components/Navbar";
import Planet from "../pages/Planet";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Planets from "../pages/Planets";
import Characters from "../pages/Characters";
import Character from "../pages/Character";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/planets" element={<Planets />}/>
        <Route path="/planets/:id" element={<Planet />}></Route>
        <Route path="/characters" element={<Characters />}/>
        <Route path="/characters/:id" element={<Character />}></Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="" element={<PrivateRouter />}>

        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
