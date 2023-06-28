import React, { useState } from 'react'
import { ValidateRegister } from './ValidateRegister'
import { register } from '../redux/userActions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const RegistrationForm = () => {

  const dispatch = useDispatch()
  const [input, setInput] = useState({
    name:"",
    email:"",
    password:""
  })
  const [errors, setErrors] = useState({
    name:"",
    email:"",
    password:""
  })



  const handleInputChange=(event)=>{
    setInput({...input,[event.target.name]: event.target.value})
    setErrors(ValidateRegister({...input,[event.target.name]: event.target.value}))
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
    if(Object.keys(errors).length === 0 ){
      dispatch(register(input))
    }
  }

  return (
    <div >
      <form onSubmit={handleSubmit} className='container mx-auto my-5 p-3 shadow-lg rounded'>
      <div class="mb-3">
      <label class="form-label">
      Name
      <input class="form-control" id="exampleFormControlInput1" type="text" name='name' value={input.name} onChange={handleInputChange} />
      </label>
      </div>
      <div class="mb-3">
      <label class="form-label">Email
      <input class="form-control" id="exampleFormControlInput1" type="text" name='email' value={input.email} onChange={handleInputChange} />
      </label>
      </div>
      <div  id="passwordHelpBlock" class="form-text">
      <label class="form-label">
      Password
      <input class="form-control" id="exampleFormControlInput1" type="password" name='password' value={input.password} onChange={handleInputChange} />
       </label>
      </div>
      <div class="mb-3">
      <button class="btn btn-success" type='submit'> Register</button>
      </div>
      <div class="mb-3">
      <Link to='/'>
      <button class="btn btn-warning" type="button">Go To Login</button>
      </Link>
      </div>
      </form>
    </div>
  )
}

export default RegistrationForm