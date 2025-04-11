import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component imports
import Home from './components/Home';
import Register from './components/Register';
import Logins from './components/Logins';
import ResetPassword from './components/ResetPassword';
import Chatbot from './components/Chatbot';
import Loan from './components/Loan'; 
import Profile from './components/Profile';
import StockMarketLive from './components/StockMarketLive';
import LoanDetail from './components/LoanDetails';
import ApplyLoan from './components/ApplyLoan';
import InsuranceApp from './components/InsuranceApp';

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
        <Route path="/loan/:type" element={<LoanDetail />} /> {/* Dynamic route for loan categories */}
        <Route path="/apply-loan" element={<ApplyLoan />} />  {/* Apply loan page */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/live-market" element={<StockMarketLive />} />
        <Route path="/insurance" element={<InsuranceApp />} /> {/* Renamed for URL consistency */}
      </Routes>
    </Router>
  );
}

export default App;
