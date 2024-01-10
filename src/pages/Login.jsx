import React from 'react'
import LoginForm from '../components/auth/LoginForm'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
  return (
    <main className='dashboard'>
    <LoginForm/>
    <p className='text-center text-warning nav-link fs-2'>Don't you have an account? <span className='text-light' role='button' onClick={()=>navigate("/register")}>Sign Up</span></p>
  </main>)
}

export default Login