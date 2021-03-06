import { Avatar, Button, Divider, Link, TextField, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react'

import '../ViewSupervisors/styles.css'
import SupervisorDetails from './SupervisorDetails/SupervisorDetails'
import theme from '../theme/Theme'
import axios from 'axios'
import { URL } from '../../constants/url'
import NavbarMUI from '../NabarMUI/NavbarMUI'

const ViewCoSupervisors = () => {

  const student = localStorage.getItem('student');

  if(!student) {
      console.log('hello');
      window.location = '/'
  } 

  const currentStudent = JSON.parse(student);
  console.log(currentStudent);

  const departments = [
    {
      value: 'DSECS',
      label: 'Software Engineering and Computer Science'
    },
    {
      value: 'CSNE',
      label: 'Computer Systems and Network Engineering'
    },
    {
      value: 'DS',
      label: 'Data Science'
    },
    {
      value: 'IT',
      label: 'Information Technology'
    },
  ]

  const [type, setType] = useState(true);

  const [supervisor, setSupervisors] = useState([]);
  const [group, setGroup] = useState({})
  const [noGroupError, setNoGroupError] = useState('');

  const getSupervisor = async () => {
    axios.defaults.headers.common["auth-token"] = currentStudent.data;
    const result = await axios.get(URL + '/staff/getSupervisors');
    setSupervisors(result.data);
    if(currentStudent.user.group){
      const res = await axios.get(URL + '/studentGroups/group/' + currentStudent.user.group);
      console.log(res);
      if(res.data.coSupervisor || !res.data.supervisor || res.data.topicStatus == 'submitted'){
        setType(false);
        setNoGroupError('You have already requested a co-supervisor or please confirm a supervisor');
        console.log('Setting to false');
      } else {
        setType(true);
        console.log('setting to true');
      }
    } else {
      setNoGroupError('Please form a group to select a supervisor');
    }
  }

  useEffect(() => {
    getSupervisor()
  }, [])

  console.log(departments);
  console.log(supervisor);

  return (
    <ThemeProvider theme={theme}>
      <NavbarMUI user={currentStudent.user}/>
    <div className='main-list mt-4'>
        <div className="container mt-2">
          <Typography variant='h4' component='div' gutterBottom ><Link href='/SelectSupervisor' style={{textDecoration: "none"}}>Supervisors</Link><u>/Co-Supervisors</u></Typography>
          <Divider />
          <div className="bg-light p-2 rounded-top">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <TextField label="Name" variant='outlined' margin='normal' value='' fullWidth/> 
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <TextField label="Research Area" variant='outlined' margin='normal' fullWidth /> 
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <TextField label="Department" variant='outlined' margin='normal' select fullWidth>
                    {departments.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                    </TextField> 
                </div>
              </div>
            <div className="row">
                <div className="col align-self-end"><Button variant='outlined'>Clear</Button></div>
            </div>
            <div className="row">
              {noGroupError? <Typography color='red' variant='subtitle1'>{noGroupError}</Typography> : ''}
            </div>
            </div>
            {supervisor.map((item) => {
              return(
              <SupervisorDetails key={item._id} type={type} user={item} token={currentStudent.data} student={currentStudent.user} position='coSupervisor' />
              )
            })}
        </div>
    </div>
    </ThemeProvider>
  )
}

export default ViewCoSupervisors