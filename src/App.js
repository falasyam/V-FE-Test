import { Route, Routes } from "react-router-dom";
import "./App.css";
import User from "./pages/user";
import Login from "./pages/login";
import UserDetail from "./pages/userdetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
