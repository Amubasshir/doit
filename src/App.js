import { createContext, useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import Header from './components/Header';
import TaskList from './components/TaskList';

export const deleteHandlerContext = createContext();

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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

  // delete event
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

  return (
    <div className="wrapper bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen text-xl text-gray-200 flex flex-col py-10 ">
      <deleteHandlerContext.Provider value={handleDelete}>
        <Header />
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} error={error} loading={loading} />
        <Footer />
      </deleteHandlerContext.Provider>
    </div>
  );
};

export default App;
