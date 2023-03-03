import { CiEdit } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';
const TaskItem = () => {
  return (
    <div className="task-item flex justify-between items-centerbg-gray-800 p-5 rounded hover:bg-gradient-to-r hover:from-teal-900 hover:to-gray-800 group">
      <div className="task-item-left flex gap-2">
        <span>
          <input type="checkbox" className="accent-teal-500" />
        </span>
        <span>
          <p className="group-hover:text-teal-500">Learn react</p>
        </span>
      </div>
      <div className="task-item-right flex gap-3">
        <span>
          <CiEdit className="text-gray-500 hover:text-teal-500 cursor-pointer duration-300" />
        </span>
        <span>
          <MdDeleteOutline className="text-gray-500 hover:text-red-500 cursor-pointer duration-300" />
        </span>
      </div>
    </div>
  );
};

export default TaskItem;
