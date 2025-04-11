import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Logins from './components/Logins';
import ResetPassword from './components/ResetPassword';
import Chatbot from './components/Chatbot';
import Loan from './components/Loan'; 
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Logins />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<h1>Welcome to Dashboard</h1>} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/loan" element={<Loan />} /> 
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;