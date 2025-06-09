import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddData from '../components/add-data'
import DashboardData from '../components/dashboard-data'

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddData/>}></Route>
          <Route path='/dashboard-data' element={<DashboardData/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}