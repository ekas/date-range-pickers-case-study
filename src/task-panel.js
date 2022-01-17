import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./task-panel.css";

const TaskPanel = ({ tasks, updateTasks, questionnaire, count }) => {
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
            from New Delhi, India, to Schmalkalden, Thuringia, Germany. As you
            complete them, the system will check to mark them. And at last, you
            could submit feedback based on your experience.
          </div>
          <div className="tasks-container">
            {tasks.map((task) => (
              <div className="task-item" key={task.id}>
                <input type="checkbox" checked={task.checked} />
                <span>{task.question}</span>
              </div>
            ))}
          </div>
          <button className="continue-button" onClick={updateTasks}>
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
        </>
      )}
    </div>
  );
};

export default TaskPanel;
