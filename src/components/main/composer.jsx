import checkIcon from "../../assets/icon-check.svg";

function TaskComposer({
  handleChange,
  handleChecked,
  selected,
  inputValue,
  onKeydown,
}) {
  return (
    <label className="field input-field">
      <div
        onClick={handleChecked}
        className={selected ? "check-circle checked" : "check-circle"}
      >
        {selected ? <img src={checkIcon} alt="Check Task" /> : null}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => onKeydown(e)}
        placeholder="Create a new todo..."
      />
    </label>
  );
}

export default TaskComposer;
