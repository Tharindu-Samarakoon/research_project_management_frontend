import { Avatar, Button, Divider, TextField, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react'

import '../ViewSupervisors/styles.css'
import SupervisorDetails from './SupervisorDetails/SupervisorDetails'
import theme from '../theme/Theme'
import axios from 'axios'
import { URL } from '../../constants/url'

const ViewSupervisors = () => {

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
      if(res.data.supervisor){
        setType(false);
      } else {
        setType(true);
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
    <div className='main-list'>
        <div className="container mt-2">
          <Typography variant='h4' component='div' gutterBottom >Supervisors</Typography>
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
              <SupervisorDetails key={item._id} type={type} user={item} token={currentStudent.data} student={currentStudent.user} />
              )
            })}
        </div>
    </div>
    </ThemeProvider>
  )
}

export default ViewSupervisors