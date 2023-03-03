const AddTask = () => {
  return (
    <form className="bg-gray-900 container mx-auto flex justify-between p-10">
      <input
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
