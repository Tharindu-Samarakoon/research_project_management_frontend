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
import StudentGroupConf from './components/StudentGroupConf/StudentGroupConf' 
import StudentTopicRegistration from './components/StudentTopicRegistration/StudentTopicRegistration'
import StudentViewSubmission from './components/ViewSubmissions/StudentViewSubmission'
import StudentAddSubmission from './components/StudentAddSubmission/StudentAddSubmission'
import ViewCoSupervisors from './components/ViewSupervisors/ViewCoSupervisors'

import { Link } from "react-router-dom";
import CoSupervisorGroupList from './components/CoSupervisorGroupList/CoSupervisorGroupList'
import SupervisorPanel from './components/SupervisorHome/SupervisorPanel.js'
import SupervisorTopicAccept from './components/SupervisorTopicAccept/SupervisorTopicAccept'

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Authentication />} />
      <Route path='/staffRegistration' element={<StaffRegistration/>} />
      <Route path='/group' element={<Submit/>}/>
      <Route path='/coSupervisorG' element={<CoSupervisorGroupList/>}/>
      <Route path='/topicAccept' element={<GroupTopicAccept/>} />
      <Route path='/supervisorAccept' element={<SupervisorTopicAccept/>}/>
      <Route path='/supervisorP' element={<SupervisorPanel/>}/>
    
     
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