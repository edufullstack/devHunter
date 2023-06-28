import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Validate } from './Validate'
import { getProfile } from '../redux/userActions'
import { Link } from 'react-router-dom'


const Profile = () => {
  const user = useSelector(state=> state.user)
  const dispatch = useDispatch()
  
  const [input, setInput] = useState({
    email:"",
    password:""
  })
  const [errors, setErrors] = useState({
    email:"",
    password:""
  })

  const handleInputChange=(event)=>{
    setInput({...input,[event.target.name]: event.target.value})
    setErrors(Validate({...input,[event.target.name]: event.target.value}))
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
    if(Object.keys(errors).length === 0 ){
      dispatch(getProfile(input))
    }
  }

  return (
    <div >
      {
        !user.nameDetail?
      
      <form onSubmit={handleSubmit} className='container mx-auto my-5 p-3 shadow-lg rounded'>
      <h3>Please re-enter your credentials</h3>
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
      <button class="btn btn-success" type='submit'> Show me the Profile Details</button>
      </div> 

<br/>
<Link to='/'>
<button type="button" className="btn btn-outline-info" >
      Go back
    </button>
</Link>

      </form>
      :
      <div class="badge bg-primary  mx-auto p-2">
      <h5 class="text-center" >Name: {user.nameDetail}</h5>
      <h5 class="text-center" >Email: {user.emailDetail}</h5>
      <Link to='/'>
        <button type="button" class="btn btn-secondary">

      Return
        </button>
      </Link>
      </div>}
    </div>
  )
}

export default Profile