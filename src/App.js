import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoute from './router/route';

function App() {
  return (
    <div className="App">
      <Router>
        <MainRoute />
      </Router>
    </div>
  );
}

export default App;
