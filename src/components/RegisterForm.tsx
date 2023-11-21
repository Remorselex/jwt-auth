import React from 'react'
import FormComponent from './FormComponent';

const RegisterForm = () => {
  const handleRegister = () => {

  }

  return (
    <div>
      <FormComponent title='Register' handleClick={handleRegister}/>
    </div>
  )
}

export default RegisterForm;