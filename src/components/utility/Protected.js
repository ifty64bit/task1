import {useContext} from 'react'
import { Navigate } from "react-router-dom";
import {UserContext} from '../UserContext'

function Protected({ children }) {
  const user = useContext(UserContext);
  return user.user===null ? <Navigate to={'/login'}/> : children
}

export default Protected