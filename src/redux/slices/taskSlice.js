import {createSlice} from "@reduxjs/toolkit"

const taskSlice=createSlice({
    name:"task",
    initialState:{
        tasks:[]
    },
    reducers:{
        createTask(state,action){
          state.tasks.push(action.payload)
        },
        editTask(state,action){
            console.log(state.tasks)
           state?.tasks?.data.forEach(task=>{
            if(task.id==action.payload.index){
                task.task=action.payload.editValue
            }
           })
        },
        getTask(state,action){
            state.tasks=action.payload 
        }
    }
})

export const {createTask, editTask,deleteTask,updateTask,getTask}=taskSlice.actions

export default taskSlice.reducer