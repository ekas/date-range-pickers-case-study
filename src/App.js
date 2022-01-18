import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPlane,
  faHotel,
  faCar,
  faSortDown,
  faLongArrowAltRight,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import AirbnbDatePicker from "./dates/airbnb/airbnbDatePicker";
import GoogleFlightDatePicker from "./dates/google-flight/googleFlightDatePicker";
import TaskPanel from "./task-panel";
import { shuffleArray } from "./helpers";

const App = () => {
  const datePickerPlugins = ["airbnb", "google-flight"];
  const tasksList = [
    {
      id: 1,
      question:
        "Select a start date (7th June,2022) and end date(1st July,2022) from the date picker application here provided.",
      checked: false,
    },
    {
      id: 2,
      question:
        "Choose a start date and end date of your choose from the date picker application here provided.",
      checked: false,
    },
    {
      id: 3,
      question:
        "Select a start date and end date using a 5 day as interval between the respective dates",
      checked: false,
    },
  ];
  const [tasks, setTasks] = useState(shuffleArray(tasksList));
  const [currentTaskId, setCurrentTaskId] = useState(tasks[0].id);
  const [isTaskPanelLoaded, setTaskPanel] = useState(true);
  const [isQuestionnairePanelLoaded, setQuestionnairePanel] = useState(false);
  const [countPluginCompleted, setCountPluginCompleted] = useState(0);
  const [selectedPlugin, setSelectedPlugin] = useState(
    shuffleArray(datePickerPlugins)[0]
  );

  const pluginSwitch = () => {
    switch (selectedPlugin) {
      case "airbnb":
        return <AirbnbDatePicker />;
      case "google-flight":
        return <GoogleFlightDatePicker />;
      default:
        break;
    }
  };
  useEffect(() => {
    console.log(selectedPlugin);
  }, [selectedPlugin]);

  const updateTasks = () => {
    debugger;
    setTasks(
      tasks.map((task) => {
        if (task.id === currentTaskId) {
          task.checked = true;
        }
        return task;
      })
    );
    const currentTaskIndex = tasks.findIndex((task) => !task.checked);
    debugger;
    if (currentTaskIndex !== -1) {
      setCurrentTaskId(tasks[currentTaskIndex].id);
    } else {
      const shuffledTasks = shuffleArray(tasks);
      setTasks(
        shuffledTasks.map((task) => {
          task.checked = false;
          return task;
        })
      );
      setCurrentTaskId(tasks[0].id);
      if (countPluginCompleted === datePickerPlugins.length - 1) {
        setQuestionnairePanel(true);
      } else {
        setSelectedPlugin(datePickerPlugins[1]);
        setCountPluginCompleted(countPluginCompleted + 1);
      }
    }
    setTaskPanel(true);
  };

  return (
    <div className="App">
      {isTaskPanelLoaded ? (
        <TaskPanel
          tasks={tasks}
          closeTasksPanel={() => setTaskPanel(false)}
          questionnaire={isQuestionnairePanelLoaded}
          count={countPluginCompleted}
        />
      ) : (
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
                <div className="placeholder">
                  <div className="picker">{pluginSwitch()}</div>
                  <div className="to-from">
                    <div className="to-from-container to-from-container-1">
                      {selectedPlugin === "airbnb" ? (
                        <>
                          <span className="to-from-1">From</span>
                          <span className="to-from-2">Accra</span>
                          <span className="to-from-3">Ghana</span>
                        </>
                      ) : (
                        <>
                          <span className="to-from-1">From</span>
                          <span className="to-from-2">New Delhi</span>
                          <span className="to-from-3">Delhi, India</span>
                        </>
                      )}
                    </div>
                    <div className="exchange-arrow">
                      <FontAwesomeIcon icon={faExchangeAlt} size="2x" />
                    </div>
                    <div className="to-from-container to-from-container-2">
                      {selectedPlugin === "airbnb" ? (
                        <>
                          <span className="to-from-1">To</span>
                          <span className="to-from-2">New Delhi</span>
                          <span className="to-from-3">Delhi, India</span>
                        </>
                      ) : (
                        <>
                          <span className="to-from-1">To</span>
                          <span className="to-from-2">Accra</span>
                          <span className="to-from-3">Ghana</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <button className="search-button" onClick={() => updateTasks()}>
                  Search Flights
                  <FontAwesomeIcon
                    className="explore-arrow"
                    icon={faLongArrowAltRight}
                    size="lg"
                  />
                </button>
              </div>
            </div>
            <div className="popular">
              <div className="popular-heading">Popular Destinations</div>
              <div className="explore-all">Explore All</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
