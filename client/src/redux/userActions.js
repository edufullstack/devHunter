import axios from 'axios'
import { getUser, addUser, userInfo } from './userSlice'


export const login = (user)=>{
  return async (dispatch)=>{
    try {
      let logged = await axios(`/login/?email=${user.email}&password=${user.password}`)
      return dispatch(getUser(logged.data))
    } catch (error) {
      alert(error.response.data.error)
    }
  }
}
export const register = (user)=>{
  return async (dispatch)=>{
    try {
      let registered = await axios.post('/register',user)
      if (registered) {
        alert('Success.');
      }
      return dispatch(addUser(registered.data))
    } catch (error) {
      alert(error.response.data.error)
    }
  }
}

export const getProfile = (user)=>{
  return async (dispatch)=>{
    try {
      let userProfile = await axios(`/profile/?email=${user.email}&password=${user.password}`)
      return dispatch(userInfo(userProfile.data))
    } catch (error) {
      alert(error.response.data.error)
    }
  }
}