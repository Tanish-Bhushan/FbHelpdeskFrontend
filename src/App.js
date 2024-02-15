import "./App.css";
import { Home } from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/login";
import { SignUp } from "./components/signup";
import { ClientDesk } from "./components/clientDesk";
import { Contacts } from "./components/contacts";
import { Inbox } from "./components/inbox";
import { Analytics } from "./components/analytics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/clientDesk" element={<ClientDesk />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
