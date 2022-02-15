
import Home from './Home';
import Login from './Login';
import { Routes, Route } from "react-router-dom";
//import  userContext  from "./hook/useUserContext"
import Context from './components/UserContext';
import Protected from './components/utility/Protected';

function App() {
  return (
    <>
      <Context>
        <Routes>
          <Route path="/" element={<Protected><Home/></Protected>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Context>
    </>
  );
}

export default App;
