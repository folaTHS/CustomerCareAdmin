import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router'
import Rep_PasswordReset from './pages/profile/rep_passwordReset/Rep_PasswordReset'


function App() {

  return (
    <>
      <RouterProvider router={router} />

      {/* <Rep_PasswordReset/> */}
      
    </>
  )
}

export default App
