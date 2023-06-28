
export const ValidateRegister = (input) => {
  let errors = {}
  if(!/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(input.email)){
    errors.email = 'Please insert a valid email'
  }
  if(!input.password){
    errors.password = 'Please insert a password'
  }
  if(!input.name){
    errors.name = 'Please insert a name'
  }




  return errors
}
