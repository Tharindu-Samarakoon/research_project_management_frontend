import React from 'react'
import Authentication from './components/Authentication/Authentication'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import StudentProfile from './components/StudentProfile/StudentProfile'
import StudentRegistration from './components/StudentRegistration/StudentRegistration'
import { Route, Routes } from 'react-router-dom'
import ViewSupervisors from './components/ViewSupervisors/ViewSupervisors'

const App = () => {
  return (
    // <Routes>
    //   <Route exact path='/' element={<Authentication />} />
    //   <Route path='/StudentRegistration' element={<StudentRegistration />} />
    // </Routes>
    <StudentProfile />
    // <div className="">Hello</div>
  )
}

export default App