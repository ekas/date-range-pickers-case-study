import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPlane,
  faHotel,
  faCar,
  faSortDown,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";

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
          <div className="explore">
            Explore Now
            <FontAwesomeIcon
              className="explore-arrow"
              icon={faArrowRight}
              size="xs"
            />
          </div>
          <div className="tabs-container">
            <div className="tabs">
              <div className="tab active">
                <FontAwesomeIcon className="tab-arrow" icon={faPlane} />
                Flight
              </div>
              <div className="tab">
                <FontAwesomeIcon className="tab-arrow" icon={faHotel} />
                Hotel
              </div>
              <div className="tab">
                <FontAwesomeIcon className="tab-arrow" icon={faCar} />
                Rent a Car
              </div>
            </div>
            <div className="tab-panel">
              <div className="options">
                <span>
                  Round Trip
                  <FontAwesomeIcon
                    className="options-arrow"
                    icon={faSortDown}
                  />
                </span>
                <span>
                  01 Passenger
                  <FontAwesomeIcon
                    className="options-arrow"
                    icon={faSortDown}
                  />
                </span>
                <span>
                  Economy Class
                  <FontAwesomeIcon
                    className="options-arrow"
                    icon={faSortDown}
                  />
                </span>
              </div>
              <div className="picker"></div>
              <div className="search-button">
                Search Flights
                <FontAwesomeIcon
                  className="explore-arrow"
                  icon={faLongArrowAltRight}
                  size="lg"
                />
              </div>
            </div>
          </div>
          <div className="popular">
            <div className="popular-heading">Popular Destinations</div>
            <div className="explore-all">Explore All</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
