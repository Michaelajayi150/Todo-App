import { useState, useRef, useEffect } from "react";
import TaskComposer from "./main/composer";
import TaskTabs from "./main/tabs";
import TaskContainer from "./main/taskHolder";

function Main({ defaultTasks }) {
  const [inputValue, setInput] = useState(""); // State to monitor changes in input value
  const [selected, setChecked] = useState(false); // State for if the task inputted is selected

  let storedTask = JSON.parse(localStorage.getItem("Tasks") || "[]"); // Get Saved Task
  const [tasks, setTask] = useState([]); // All task state
  const [active, setActive] = useState([]); // Active task state
  const [completed, setCompleted] = useState([]); // Complete task state

  const [highlight, setHighlight] = useState("All"); // State to know which tasks are highlighted (Alternatively you can use an useRef as well)

  const draggedItem = useRef(); // Gets the item being dragged
  const draggedOverItem = useRef(); // Gets the item being dragged over

  const Tab = [
    { text: "All", list: tasks },
    { text: "Active", list: active },
    { text: "Completed", list: completed },
  ];

  // Every change in tasks state should affect all other states
  useEffect(() => {
    setCompleted(
      tasks.filter((task) => {
        if (task.checked) {
          return task;
        }
      })
    );

    setActive(
      tasks.filter((task) => {
        return task.checked === false;
      })
    );
  }, [tasks]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    // Get tasks from stored tasks
    let storedTask = JSON.parse(localStorage.getItem("Tasks")) || defaultTasks;

    // Set the tasks
    localStorage.setItem("Tasks", JSON.stringify(storedTask));
    setTask(storedTask);
  };

  // Sets the tasks as the the tab are higlighted
  const filterTab = (tab) => {
    setHighlight(tab.text);
  };

  // handle change in input value
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // handle inputted value is finished or not
  const handleChecked = () => {
    setChecked((prev) => !prev);
  };

  // on Task submit, add Task
  const onKeydown = (e) => {
    e.keyCode === 13 ? addTask() : null;
  };

  // Add task to the tasks array
  const addTask = () => {
    if (inputValue !== "") {
      storedTask = [
        ...tasks,
        { text: inputValue, checked: selected, id: tasks.length + 1 },
      ];

      localStorage.setItem("Tasks", JSON.stringify(storedTask));

      setTask(storedTask);

      // Reset the input field
      setInput("");
      setChecked(false);
    }
  };

  // handle task complete
  const handleCompleted = (task) => {
    // Take the current tasks, map and check if id matches the task selected
    storedTask = storedTask.map((obj) => {
      if (obj.id === task.id) {
        return { ...obj, checked: !task.checked }; // Update its details to be checked
      }
      return obj;
    });
    localStorage.setItem("Tasks", JSON.stringify(storedTask));

    setTask(storedTask);
  };

  // handle delete
  const handleDelete = (task) => {
    // Take the current tasks, filter out the matching id
    storedTask = storedTask.filter((obj) => {
      return obj.id !== task.id;
    });
    localStorage.setItem("Tasks", JSON.stringify(storedTask));

    setTask(storedTask);
  };

  // handle clear completed
  const handleClear = () => {
    // Take the current tasks, filter all that their details checked are true
    storedTask = storedTask.filter((task) => {
      return task.checked === false;
    });

    localStorage.setItem("Tasks", JSON.stringify(storedTask));

    setTask(storedTask);
  };

  // handle sort
  const handleSort = () => {
    // Duplicate the Task array
    storedTask = [...tasks];

    // Remove and save the item dragged
    let itemDragged = storedTask.splice(draggedItem.current, 1)[0];

    // Re-sort the Task array and add the item dragged to it new position
    storedTask.splice(draggedOverItem.current, 0, itemDragged);

    // reset the dragged items
    draggedItem.current = null;
    draggedOverItem.current = null;

    // Update the Task array
    localStorage.setItem("Tasks", JSON.stringify(storedTask));
    setTask(storedTask);
  };

  return (
    <main className="content">
      <TaskComposer
        handleChange={handleChange}
        handleChecked={handleChecked}
        selected={selected}
        inputValue={inputValue}
        onKeydown={onKeydown}
      />

      <div className="field items">
        {Tab.map((item, index) => (
          <TaskContainer
            item={item}
            highlight={highlight}
            key={index}
            handleChecked={handleCompleted}
            handleDelete={handleDelete}
            handleSort={handleSort}
            draggedItem={draggedItem}
            draggedOverItem={draggedOverItem}
          />
        ))}

        <div className="field-footer">
          <small>
            {highlight === "Completed" ? completed.length : active.length} items
            left
          </small>
          <TaskTabs
            highlight={highlight}
            filter={filterTab}
            size={"lg"}
            Tab={Tab}
          />
          <small className="pointer" onClick={handleClear}>
            Clear Completed
          </small>
        </div>
      </div>

      <TaskTabs
        highlight={highlight}
        filter={filterTab}
        Tab={Tab}
        size={"sm"}
      />

      <small className="content-footer">Drag and drop to reorder list</small>
    </main>
  );
}

export default Main;
