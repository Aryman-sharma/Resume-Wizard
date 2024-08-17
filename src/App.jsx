import { Outlet } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

function App() {
    
  const {user,isLoaded,isSignedIn} =useUser();
  // This user hook gives you user information and it is importeed from clerk
  
  if(!isSignedIn)
  {
    return <Navigate to={'/auth/sign-in'}/>;
  }

  return (
    <>
     <Outlet/>
    </>
  )
}

export default App
