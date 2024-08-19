import { Outlet } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';
import Header from './components/custom/Header';
import { Toaster } from "sonner";

function App() {
    
  const {user,isLoaded,isSignedIn} =useUser();
  // This user hook gives you user information and it is importeed from clerk
  
  if(!isSignedIn&&isLoaded)
  {
    return <Navigate to={'/auth/sign-in'}/>;
  }

  return (
    <>
     <Header/>
     <Outlet/>
     <Toaster/>
    </>
  )
}

export default App
