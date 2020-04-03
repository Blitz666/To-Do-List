const getAllTasks = async () => {
  try {
    let apiURL = `https://wincacademydatabase.firebaseio.com/jos/tasks.json`;
    const result = await fetch(apiURL, { method: "GET" });
    const data = await result.json();
    let tasks = Object.keys(data).map((key) => ({
      id: key,
      description: data[key].description,
      done: data[key].done,
    }));
    return tasks;
  } catch (error) {
    alert(error);
  }
};

const addTask = async (task) => {
  try {
    let apiURL = `https://wincacademydatabase.firebaseio.com/jos/tasks.json`;
    const result = await fetch(apiURL, {
      method: "POST",
      body: JSON.stringify(task),
    });
    const data = await result.json();
    return data;
  } catch (error) {
    alert(error);
  }
};

const deleteTask = async (task) => {
  try {
    let apiURL = `https://wincacademydatabase.firebaseio.com/jos/tasks.json`;
    const result = await fetch(apiURL, {
      method: "DELETE",
      body: JSON.stringify(task),
    });
    const data = await result.json();
    return data;
  } catch (error) {
    alert(error);
  }
};
