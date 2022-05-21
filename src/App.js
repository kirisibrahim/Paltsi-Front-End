import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate,} from 'react-router-dom';
import Home from './pages/Home';
import Departments from './pages/Departments';
import Workers from './pages/Workers';

function App() {
  return (
    <Router>
    <Navbar />
    </Router>
  );
}

export default App;
