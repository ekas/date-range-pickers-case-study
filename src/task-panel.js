import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./task-panel.css";

const TaskPanel = ({
  tasks,
  closeTasksPanel,
  questionnaire,
  appName,
  minutes,
  seconds,
}) => {
  return (
    <div className="task-panel">
      {questionnaire === false ? (
        <>
          <div className="heading">
            Hello! Thank you so much for taking out time for this survey...
          </div>
          <div className="sub-heading">
            <strong>Use Case: </strong>You see some tasks listed below. You will
            be taken through them one by one. Your job will involve selecting a
            date range on the available UI for your upcoming flight schedule
            from Accra, Ghana to New Delhi, India or vice-a-versa. As you
            complete them, the system will check to mark them. And at last, you
            could submit feedback based on your experience.
          </div>
          <div className="heading">
            {appName === "airbnb" ? "App B" : "App A"}
          </div>
          {seconds !== 0 && (
            <div
              className={
                minutes >= 2 && seconds > 0 ? "notify-red" : "notify-green "
              }
            >
              Task completed in {minutes} mins and {seconds} secs
            </div>
          )}

          <div className="tasks-container">
            {tasks.map((task) => (
              <div className="task-item" key={task.id}>
                <input type="checkbox" checked={task.checked} />
                <span>{task.question}</span>
              </div>
            ))}
          </div>
          <button className="continue-button" onClick={closeTasksPanel}>
            Let's Go!
            <FontAwesomeIcon
              className="explore-arrow"
              icon={faLongArrowAltRight}
              size="lg"
            />
          </button>
        </>
      ) : (
        <>
          <div className="heading">
            All Tasks are complete. Could you please provide us your feedback.
          </div>
          <div className="questionnaire-container">
            <div className="questionnaire-item">
              <span className="label">Gender</span>
              <span>
                <input type="radio" name="gender" /> Male
              </span>
              <span>
                <input type="radio" name="gender" /> Female
              </span>
            </div>
            <div className="questionnaire-item">
              <span className="label">Age</span>
              <select name="age" id="age">
                <option>Select age</option>
                <option>10-20</option>
                <option>21-30</option>
                <option>31-40</option>
                <option>41-50</option>
                <option>51-60</option>
                <option>61-70</option>
              </select>
            </div>
            <div className="questionnaire-item">
              <span className="label">
                Which App variant do you feel is more convinient to use?
              </span>
              <select name="variant" id="variant">
                <option>Select App Variant</option>
                <option>App A</option>
                <option>Appp B</option>
              </select>
            </div>
            <div className="questionnaire-item">
              <span className="label">
                Are you new to using booking applications such as this
                date-picker application?
              </span>
              <span>
                <input type="radio" name="new" /> Yes
              </span>
              <span>
                <input type="radio" name="new" /> No
              </span>
            </div>
            <button className="continue-button">Submit</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskPanel;
