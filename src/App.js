import './App.css';
import UserProfile from './components/user-profile';
import profileLogo from './images/pic.webp';

function App() {
  return (
    <div className="App">
      <UserProfile
        name="Kabilesh"
        email="kabilesh@dal.ca"
        picture={profileLogo}
      />
    </div>
  );
}

export default App;
