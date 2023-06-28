import {useDispatch, useSelector} from 'react-redux'
import React, { useEffect, useState } from 'react'
import { login } from '../redux/userActions'
import { Validate } from './Validate'
import { Link } from 'react-router-dom'
import { exit } from '../redux/userSlice'

const LoginForm = () => {
  const dispatch= useDispatch()
  const user = useSelector(state=> state.user)

  useEffect(()=>{

  },[user])

  const [input, setInput] = useState({
    email:"",
    password:""
  })
  const [errors, setErrors] = useState({
    email:"",
    password:""
  })

  const handleExit = ()=>{
    dispatch(exit())
  }

  const handleInputChange=(event)=>{
    setInput({...input,[event.target.name]: event.target.value})
    setErrors(Validate({...input,[event.target.name]: event.target.value}))
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
    if(Object.keys(errors).length === 0 ){
      dispatch(login(input))
    }
  }

  return (
    <div >
      {!user.name? 
      <form onSubmit={handleSubmit} className='container mx-auto my-5 p-3 shadow-lg rounded'>
      <div class="mb-3">
      <label class="form-label">
        Email
      <input class="form-control" type="text" name='email' value={input.email} onChange={handleInputChange} />
      </label>
      </div>
      <div class="mb-3">
      <label class="form-label">
      Password
      <input class="form-control" type="password" name='password' value={input.password} onChange={handleInputChange} />
      </label>
      </div>
      <div class="mb-3">
      <button type='submit' class="btn btn-success"> Login</button>
      </div>

      <br/>

      <Link to='/register'>
        <button class="btn btn-warning" type="button">Go to Register</button>
      </Link>
      </form>
      :
      <div className='container'>
  <h2 className="mb-3">Welcome {user.name}</h2>
  <Link to='/profile'>
    <button type="button" className="btn btn-dark me-3">
      Profile Details
    </button>
  </Link>
  
    <button type="button" className="btn btn-outline-danger" onClick={handleExit}>
      Exit
    </button>
  
</div>

  
      
      }
    </div>
  )
}

export default LoginForm