const TaskItem = () => {
  return (
    <div className="task-item">
      <div className="task-item-left flex gap-2">
        <span>
          <input type="checkbox" />
        </span>
        <span>
          <p>Learn react</p>
        </span>
      </div>
      <div className="task-item-right"></div>
    </div>
  );
};

export default TaskItem;
