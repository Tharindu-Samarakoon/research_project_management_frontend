import React from 'react'
import Authentication from './components/Authentication/Authentication'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import StudentProfile from './components/StudentProfile/StudentProfile'
import StudentRegistration from './components/StudentRegistration/StudentRegistration'
import { Route, Routes } from 'react-router-dom'
import ViewSupervisors from './components/ViewSupervisors/ViewSupervisors'
import StudentGroupConf from './components/StudentGroupConf/StudentGroupConf' 
import StudentTopicRegistration from './components/StudentTopicRegistration/StudentTopicRegistration'
import StudentViewSubmission from './components/ViewSubmissions/StudentViewSubmission'
import StudentAddSubmission from './components/StudentAddSubmission/StudentAddSubmission'
import ViewCoSupervisors from './components/ViewSupervisors/ViewCoSupervisors'


const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Authentication />} />
      <Route exact path='/StudentRegistration' element={<StudentRegistration />} />
      <Route exact path='/studentProfile' element={ <StudentProfile /> } />
      <Route exact path='/studentGroupReg' element={ <StudentGroupConf /> } />
      <Route exact path='/SelectSupervisor' element={<ViewSupervisors/> } />
      <Route exact path='/SelectCoSupervisor' element={<ViewCoSupervisors/> } />
      <Route exact path='/studentTopicReg' element={ <StudentTopicRegistration/> } />
      <Route exact path='/studentSubmission' element={ <StudentViewSubmission /> } />
      <Route exact path='/studentAddSubmission' element={ <StudentAddSubmission /> } />
    </Routes>
  )
}

export default App