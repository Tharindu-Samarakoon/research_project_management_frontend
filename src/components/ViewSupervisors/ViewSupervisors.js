import { Avatar, Button, Divider, TextField, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { MenuItem } from '@mui/material'
import React from 'react'

import '../ViewSupervisors/styles.css'
import SupervisorDetails from './SupervisorDetails/SupervisorDetails'
import theme from '../theme/Theme'

const ViewSupervisors = () => {

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

  console.log(departments);

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
            </div>
            <SupervisorDetails type={true}/>
            <SupervisorDetails type={true}/>
        </div>
    </div>
    </ThemeProvider>
  )
}

export default ViewSupervisors