import { Avatar, Button, Divider, Typography } from '@mui/material'
import React from 'react'

const SupervisorDetails = ({type}) => {
  return (
    <div className="row border border-secondary p-3 m-3 rounded">
              <div className="col-sm-12 col-md-3 col-lg-2 d-flex justify-content-center align-items-center">
                <Avatar
                  alt="Remy Sharp"
                  variant='rounded'
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 120, height: 120 }}
                />
              </div>
              <div className="col-sm-12 col-md-9 col-lg-10">
                <Typography
                 component='div' gutterBottom variant='h5'>Name : Author Morgan</Typography>
                <Divider />
                <Typography component='div' gutterBottom variant='h6'>Department : Software Engineering</Typography>
                <Divider />
                <Typography component='div' variant='subtitle1' gutterBottom>Research Interests : Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Excepturi molestias, dolor culpa error modi repellat sed, cumque recusandae quas, fugiat praesentium commodi quo nisi.
                  Cum reiciendis recusandae cumque at quis.
                </Typography>
                <div className="row">
                <div className="col d-flex justify-content-end">{type ? <Button variant='contained'>Send Request</Button> : ''}</div>
                </div>
                </div>
              </div>
              
  )
}

export default SupervisorDetails