import React from 'react'
import AdminHome from './components/Admin/AdminHome.js'
import Authentication from './components/Authentication/Authentication'
import Navbar from './components/Navbar/Navbar'
import StudentRegistration from './components/StudentRegistration/StudentRegistration'

const App = () => {
  return (
    <div>
          <Navbar />
          {/* <img src={require('./images/ava.jpg').default} height={ 150} width={150} /> */}
          <AdminHome/>
    </div>
  )
}

export default App