import React from 'react';
import { Navigate } from 'react-router-dom';
<<<<<<< HEAD
import { UserAuth } from '../contexts/AuthContext';
=======
import { UserAuth } from '../context/AuthContext';
>>>>>>> 3f38b6a663f291f838515a18daf123737ec78f8d

const ProtectedRoute = ({ children }) => {
    const {user} = UserAuth()

  if (!user) {
    return <Navigate to='/' />;
  } else {
    return children;
  }
};

export default ProtectedRoute;