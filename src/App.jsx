import { Route, Routes } from "react-router-dom";
import { Chat, Login, Profile } from "./pages/page.js";
import ErrorPage from "./pages/ErrorPage.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ErrorPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
