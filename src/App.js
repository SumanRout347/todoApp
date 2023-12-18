import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios"
import {useSelector,useDispatch} from "react-redux"
import { editTask, getTask } from "./redux/slices/taskSlice";

function App() {
  const API = "https://64e5d1f809e64530d17f15bc.mockapi.io/fakeData";
  const t=useSelector(store=>store.task.tasks)
  const dispatch=useDispatch()

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editValue,setEditValue]=useState("")

  useEffect(()=>{
    (async function getToDo(){
      const data=await axios.get(`${API}`)
      dispatch(getTask(data))
    })() 
  },[])

   async function submit(e){
    e.preventDefault()
    await axios.post(`${API}`,{task})
  }

  const deleteTodo = async (index)=>{
    await axios.delete(`${API}/${index}`)
  }
  const editTodo = async (index)=>{
    setTask(editValue)
    await axios.put(`${API}/${index}`,{task:editValue})
    dispatch(editTask({id:index,val:editValue}))
  }
  return (
    <div className="App">
      <h1>To DO APP</h1>

      <form action="" onSubmit={submit}>
        <input
          type="text"
          placeholder="Enter your task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={submit}>Submit</button>
      </form>

      <h2>My ToDO</h2>
      <div>
        {t && t.data?.map(data=>(
          <div className="toDo-card" key={data.id}>
            <p className="task">{data.task}</p>
            <input type="text" placeholder="enter new value" onChange={(e)=>setEditValue(e.target.value)} />
            <button onClick={()=>editTodo(data.id)}>Edit</button>
            <button onClick={()=>deleteTodo(data.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
