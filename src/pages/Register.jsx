
import RegisterForm from '../components/auth/RegisterForm'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()
  return (<main className='dashboard'>
   <RegisterForm/>
   <p className='text-center mt-3 text-warning fs-2'>Do you already have an account? <span className='text-light' role='button' onClick={()=>navigate("/login")}>Sign In</span></p>
   <div className='empty-div'></div>
  
  </main>
   
  )
}

export default Register