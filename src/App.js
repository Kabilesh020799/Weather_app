import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoute from './router/route';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <MainRoute />
      </Router>
    </div>
  );
}

export default App;
