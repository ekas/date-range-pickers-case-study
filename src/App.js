import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header-bg">
        <header className="header">
          <img src={logo} className="app-logo" alt="logo" />
          <div className="app-menu">
            <span>Holiday Packages</span>
            <span>Flight Schedule</span>
            <span>Account Settings</span>
            <span>Manage Booking</span>
          </div>
          <div className="right-menu">
            <span>Register</span>
            <span className="button">Sign In</span>
          </div>
        </header>
        <div className="content">
          <div className="heading">Hey Buddy? where are you</div>
          <div className="heading">
            <span>Flying</span> to?
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
