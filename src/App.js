import { createContext, useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import Header from './components/Header';
import TaskList from './components/TaskList';

export const deleteHandlerContext = createContext();
export const EditHandlerContext = createContext();

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editedText, setEditedText] = useState('');
  const [toggleEditMode, setToggleEditMode] = useState(true);

  useEffect(() => {
    // getting data from server
    fetchingData();
  }, []);

  // fetching data

  const fetchingData = async () => {
    try {
      const res = await fetch(
        'https://glorious-liberating-buckaroo.glitch.me/task'
      );
      if (!res.ok) throw new Error('something went wrong');
      const data = await res.json();
      setTasks(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  // !delete event
  const handleDelete = (id) => {
    // delete data
    deleteData(id);
    // set updated tasks
    setTasks(tasks.filter((task) => id !== task.id));
  };
  const deleteData = async (id) => {
    await fetch(`https://glorious-liberating-buckaroo.glitch.me/task/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });
  };

  // !edit event
  const handleEdit = (id) => {
    // set a target el for edit
    const [editableTarget] = tasks.filter((task) => id === task.id);
    editableTarget.isEditable = true;
    setEditedText(editableTarget.text);
    setTasks([...tasks]);
    setToggleEditMode(false);
    // re-arrange
    tasks
      .filter((task) => task.id === id)
      .map((targetedEl) => (targetedEl.isEditable = false));
    //  editing task form handler

    //  set newly edited text
  };
  const handleEditSubmitter = (e, id) => {
    console.log(id);
  };
  return (
    <div className="wrapper bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen text-xl text-gray-200 flex flex-col py-10 ">
      <deleteHandlerContext.Provider value={handleDelete}>
        <EditHandlerContext.Provider value={handleEdit}>
          <Header />
          <AddTask tasks={tasks} setTasks={setTasks} />
          <TaskList
            tasks={tasks}
            error={error}
            loading={loading}
            handleEditSubmitter={handleEditSubmitter}
            editedText={editedText}
            setEditedText={setEditedText}
          />
          <Footer />
        </EditHandlerContext.Provider>
      </deleteHandlerContext.Provider>
    </div>
  );
};

export default App;
