import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoutes({children}) {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading) {
        return;
    }

    if(user) {
        return children;
    }

    
  return <Navigate state={location.pathname} to='/signin'></Navigate>
}