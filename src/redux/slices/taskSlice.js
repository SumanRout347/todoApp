import {createSlice} from "@reduxjs/toolkit"

const taskSlice=createSlice({
    name:"task",
    initialState:{
        tasks:[]
    },
    reducers:{
        createTask(state,action){
          state.tasks.data.push(action.payload)
        },
        editTask(state,action){
          state.tasks.data=state?.tasks?.data.map(task=>{
            if(task.id==action.payload.id){
                task.task=action.payload.task
            }
            return task
           })
        },
        getTask(state,action){
            state.tasks=action.payload 
        }
    }
})

export const {createTask, editTask,deleteTask,updateTask,getTask}=taskSlice.actions

export default taskSlice.reducer