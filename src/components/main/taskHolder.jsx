import Task from "./task";

function TaskContainer(props) {
  return props.highlight === props.item.text
    ? props.item.list.map((task, index) => (
        <Task task={task} key={index} index={index} {...props} />
      ))
    : null;
}

export default TaskContainer;
