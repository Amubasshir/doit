import { useRef, useState } from 'react';

const AddTask = () => {
  const [task, setTask] = useState('');
  const inputRef = useRef(null);

  // add task handle event
  const addTaskHandler = (e) => {
    e.preventDefault();
    // post task input to server
    taskPosting(task);
    inputRef.current.blur();
    setTask('');
  };
  // task posting
  const taskPosting = async (text) => {
    const res = await fetch(
      'https://aluminum-delicate-snowshoe.glitch.me/tasks',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ text }),
      }
    );
  };

  return (
    <form
      className="bg-gray-900 container mx-auto flex justify-between p-10"
      onSubmit={addTaskHandler}
    >
      <input
        ref={inputRef}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
        type="text"
        placeholder="what's to do"
        className="bg-transparent outline-none border-gray-700 border-b-2 py-2 px-5 focus:border-teal-700"
      />
      <button
        type="submit"
        className="bg-teal-900/30 py-2 px-5 border-teal-500 rounded-md text-teal-500 hover:bg-teal-900 hover:text-teal-100 duration-300"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
