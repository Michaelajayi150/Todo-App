function TaskTabs({ filter, highlight, Tab, size }) {
  return (
    <div className={size === "sm" ? "tabs field" : "tabs"}>
      {Tab.map((tab, index) => (
        <div
          key={index}
          className={
            highlight === tab.text
              ? "tab-item highlighted pointer"
              : "tab-item pointer"
          }
          onClick={() => filter(tab)}
        >
          {tab.text}
        </div>
      ))}
    </div>
  );
}

export default TaskTabs;
