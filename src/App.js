import React from 'react'
import Authentication from './components/Authentication/Authentication'
import Submit from './components/SubmittedGroupList/SubmittedGroupList'
import GroupTopicAccept from './components/GroupTopicAccept/GroupTopicAccept'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import StudentProfile from './components/StudentProfile/StudentProfile'
import StudentRegistration from './components/StudentRegistration/StudentRegistration'
import { Route, Routes } from 'react-router-dom'
import StaffRegistration from './components/StaffRegistration/StaffRegistration'
import ViewSupervisors from './components/ViewSupervisors/ViewSupervisors'
// import StudentGroupConf from './components/StudentGroupConf/StudentGroupConf'
import StudentTopicRegistration from './components/StudentTopicRegistration/StudentTopicRegistration'


const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Authentication />} />
      <Route path='/StudentRegistration' element={<StudentRegistration />} />
      <Route path='/staffRegistration' element={<StaffRegistration/>} />
      <Route path='/group' element={<Submit/>}/>
      <Route path='/topicAccept' element={<GroupTopicAccept/>} />
      <Route path='/studentProfile' element={ <StudentProfile /> } />
      {/* <Route path='/studentGroupReg' element={ <StudentGroupConf /> } /> */}
    </Routes>
    // <div className="">
    // <Navbar />
    // <StudentTopicRegistration />
    // </div>
    // <div className="">Hello</div>
  )
}

export default App