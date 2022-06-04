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
      value: 'Software Engineering and Computer Science',
      label: 'Software Engineering and Computer Science'
    },
    {
      value: 'Computer Systems and Network Engineering',
      label: 'Computer Systems and Network Engineering'
    },
    {
      value: 'Data Science',
      label: 'Data Science'
    },
    {
      value: 'Information Technology',
      label: 'Information Technology'
    },
  ]

  const [type, setType] = useState(true);
  const [filterName, setFilterName] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');
  const [filterResearch, setFilterResearch] = useState('');
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
        setNoGroupError('You have already selected a supervisor');
      } else {
        setType(true);
      }
    } else {
      setNoGroupError('Please form a group to select a supervisor');
    }
  }

  const clearFilters = () => {
    setFilterDepartment('');
    setFilterName('');
    setFilterResearch('');
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
          <Typography variant='h4' component='div' gutterBottom ><u>Supervisors/</u><Link href='/SelectCoSupervisor' style={{textDecoration: "none"}}>Co-Supervisor</Link> </Typography>
          <Divider />
          <div className="bg-light p-2 rounded-top">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <TextField label="Name" variant='outlined' margin='normal' value={filterName} onChange={(e) => setFilterName(e.target.value)} fullWidth/> 
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <TextField label="Research Area" variant='outlined' margin='normal' value={filterResearch} onChange={(e) => setFilterResearch(e.target.value)} fullWidth /> 
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <TextField label="Department" variant='outlined' margin='normal' onChange={(e) => setFilterDepartment(e.target.value)} select fullWidth>
                    {departments.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                    </TextField> 
                </div>
              </div>
            <div className="row">
                <div className="col align-self-end"><Button variant='outlined' type='reset' onClick={clearFilters}>Clear</Button></div>
            </div>
            <div className="row">
              {noGroupError? <Typography color='red' variant='subtitle1'>{noGroupError}</Typography> : ''}
            </div>
            </div>
            {supervisor.filter((val) => {
              if (filterName == '' && filterResearch == '' && filterDepartment == '') {
                return val;
              } else if (val.firstName.toLowerCase().includes(filterName.toLowerCase()) && val.research_interest.toLowerCase().includes(filterResearch.toLowerCase()) && val.department.toLowerCase().includes(filterDepartment.toLowerCase())){
                return val;
              }
            }
            ).map((item) => {
              return(
              <SupervisorDetails key={item._id} type={type} user={item} token={currentStudent.data} student={currentStudent.user} position='supervisor' />
              )
            })}
        </div>
    </div>
    </ThemeProvider>
  )
}

export default ViewSupervisors