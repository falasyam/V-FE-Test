import { Route, Routes } from "react-router-dom";
import "./App.css";
import User from "./pages/user";
import Login from "./pages/login";
import UserDetail from "./pages/userdetail";
import NotFound from "./pages/notfound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
