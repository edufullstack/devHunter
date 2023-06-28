import React from 'react'

export const Validate = (input) => {
  let errors = {}
  if(!/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(input.email)){
    errors.email = 'Please insert a valid email'
  }
  if(!input.password){
    errors.password = 'Please insert a password'
  }




  return errors
}
