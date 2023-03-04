import { useContext } from 'react';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';
import { deleteHandlerContext, EditHandlerContext } from '../App';
const TaskItem = ({ task, handleEditSubmitter, editedText, setEditedText }) => {
  const handleDelete = useContext(deleteHandlerContext);
  const handleEdit = useContext(EditHandlerContext);

  return (
    <div className="task-item flex justify-between items-center bg-gray-800 p-5 rounded hover:bg-gradient-to-r hover:from-teal-900 hover:to-gray-800 group">
      <div className="task-item-left flex gap-2">
        <span>
          <input type="checkbox" className="accent-teal-500" />
        </span>

        {task.isEditable && (
          <form>
            <input required type="text" />
          </form>
        )}
        {!task.isEditable && (
          <p className="group-hover:text-teal-500">{task.text}</p>
        )}
      </div>
      <div className="task-item-right flex gap-3">
        <button onClick={() => handleEdit(task.id)}>
          <CiEdit className="text-gray-500 hover:text-teal-500 cursor-pointer duration-300" />
        </button>
        <button onClick={() => handleDelete(task.id)}>
          <MdDeleteOutline className="text-gray-500 hover:text-red-500 cursor-pointer duration-300" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
