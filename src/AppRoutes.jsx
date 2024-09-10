import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from './pages/Navigation'
import LoginPage from './pages/LoginPage'
import CreateAcountPage from './pages/CreateAcountPage'
import ProfilePage from './pages/ProfilePage'
import EditeProfilePage from './pages/EditeProfilePage'


export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<LoginPage />} />
        <Route path='/createacount' element={<CreateAcountPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/editprofile' element={<EditeProfilePage />} />
      </Route>

      <Route path='*' element={<Navigation to='/' />} />
    </Routes>
  )
}
