import { createSlice } from '@reduxjs/toolkit'

const initialState ={
  name:"",
  email:"",
  nameDetail:"",
  emailDetail:""
}

export const userSlice = createSlice({
  name:"user",
  initialState,
  reducers:{
    getUser:(state,action)=>{
      const {name, email} = action.payload
      state.name = name
      state.email = email
    },
    userInfo:(state,action)=>{
      const {name, email} = action.payload
      state.nameDetail = name
      state.emailDetail = email
    },
    addUser:(state,action)=>{
      return {...state}
    },
    exit:(state,action)=>{
      state.name = ''
      state.email = ''
      state.nameDetail = ''
      state.emailDetail = ''
    }
  }
})

export const {getUser,addUser,userInfo,exit}= userSlice.actions
export default userSlice.reducer
