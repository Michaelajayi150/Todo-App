import checkIcon from "../../assets/icon-check.svg";

function TaskComposer({
  handleChange,
  handleChecked,
  selected,
  inputValue,
  onKeydown,
}) {
  return (
    <div className="field input-field">
      <div
        onClick={handleChecked}
        className={selected ? "check-circle checked" : "check-circle"}
      >
        {selected ? <img src={checkIcon} alt="Check Task" /> : null}
      </div>
      <label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => onKeydown(e)}
          placeholder="Create a new todo..."
        />
      </label>
    </div>
  );
}

export default TaskComposer;
