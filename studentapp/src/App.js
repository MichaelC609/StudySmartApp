import Login from "./Login";
import Signup from "./Signup";
import Home from "./Landing";
import Landing from "./Landing";
import { BrowserRouter } from "react-router-dom";
import {Routes, Route} from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
