import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import CreateAcountPage from './pages/CreateAcountPage'
import ProfilePage from './pages/ProfilePage'
import EditeProfilePage from './pages/EditeProfilePage'
import ProtectedRoute from './pages/ProtectedRoute'


export default function AppRoutes() {
  return (
    <Routes>

      <Route path='/' element={<LoginPage />} />
      <Route path='/createacount' element={<CreateAcountPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/editprofile' element={<EditeProfilePage />} />
      </Route>

      <Route path='*' element={<Navigation to='/' />} />
    </Routes>
  )
}
