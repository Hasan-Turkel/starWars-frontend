import React from 'react'
import LoginForm from '../components/auth/LoginForm'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
  return (
    <>
    <LoginForm/>
    <p className='text-center'>Don't you have an account? <span className='text-danger' role='button' onClick={()=>navigate("/register")}>Sign Up</span></p>
    <div className='empty-div'></div>
  </>)
}

export default Login