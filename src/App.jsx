import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import {v4} from 'uuid'
import Title from "./components/styles/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [] 
  )
  
  /*[
    {
      id: 1,
      title: "teste 1",
      description:"teste",
      isCompleted: false,
    },
    {
      id: 2,
      title: "teste 2",
      description:"teste",
      isCompleted: false,
    },
    {
      id: 3,
      title: "teste 3",
      description:"teste",
      isCompleted: false,
    },
  ]*/

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    /*const fetchTasks = async () => {
      //CHAMAR API 
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
        method: 'GET',  
      })
      
      //PEGAR OS DADOS QUE ELA RETORNA
      const data = await response.json()

      //ARMAZENAR/PERSISTIR ESSES DADOS NO STATE
      setTasks(data)
    }
      //SE VOCÊ QUISER, VOCÊ PODE CHAMAR UMA API PARA PEGAR AS TAREFAS
      //fetchTasks();*/
  }, [])

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId){
        return {...task, isCompleted: !task.isCompleted}
      }

        return task;
    });
    setTasks(newTasks)
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task)=> task.id != taskId)
    setTasks(newTasks)

  }

  function onAddTaskSubmit (title, description) {
    const newTasks = {
    id: v4(),
    title: title,
    description: description,
    isCompleted: false
  }
  setTasks([...tasks, newTasks])
  }

  return (
    <div className="w-screen min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks 
          tasks={tasks} 
          onTaskClick={onTaskClick} 
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
