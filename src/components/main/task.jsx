import crossIcon from "../../assets/icon-cross.svg";
import checkIcon from "../../assets/icon-check.svg";

function Task(props) {
  return (
    <div
      className="task-item"
      draggable
      onDragStart={(e) => (props.draggedItem.current = props.index)}
      onDragEnter={(e) => (props.draggedOverItem.current = props.index)}
      onDragEnd={props.handleSort}
      onTouchStart={(e) => (props.draggedItem.current = props.index)}
      onTouchEnd={props.handleSort}
      onClick={() => props.handleChecked(props.task)}
    >
      <div
        className={props.task.checked ? "check-circle checked" : "check-circle"}
      >
        {props.task.checked ? <img src={checkIcon} alt="Check Task" /> : null}
      </div>
      <div className={props.task.checked ? "task-body checked" : "task-body"}>
        {props.task.text}
      </div>
      <div
        className="cancel-task"
        onClick={() => props.handleDelete(props.task)}
      >
        <img src={crossIcon} alt="Delete Task" />
      </div>
    </div>
  );
}

export default Task;
