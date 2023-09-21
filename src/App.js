import DashboardContent from './dashboard/Dashboard';
import RegisterContent from './register/Register';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    < div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<DashboardContent />} />
          <Route path="/register" element={<RegisterContent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;