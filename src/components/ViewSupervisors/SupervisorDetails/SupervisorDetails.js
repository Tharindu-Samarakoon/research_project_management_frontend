import { Avatar, Button, Divider, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { URL } from '../../../constants/url';
import 'react-toastify/dist/ReactToastify.css'

const SupervisorDetails = ({type, user, token, student, position, coType}) => {

  console.log(position);

  const handleRequest = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.headers.common["auth-token"] = token;
      if(position === 'coSupervisor'){
        const res = await axios.post(URL+'/studentGroups/requestCoSupervisor/'+ student.group, {coSupervisor: user.email});
        console.log(res);
        if(res.status = 200){
          toast.success("Request Sent");
          setTimeout(() => {
            window.location.reload();
          }, 2000)
        }
      } else {
        const res = await axios.post(URL+'/studentGroups/requestSupervisor/'+ student.group, {supervisor: user.email});
        console.log(res);
        if(res.status = 200){
          toast.success("Request Sent");
          setTimeout(() => {
            window.location.reload();
          }, 2000)
        }
      }
    
    } catch (error) {
      console.log(error);
    }
  }

  console.log(user);
  return (
    <div className="row border border-secondary p-3 m-3 rounded">
      <ToastContainer position='top-center' />
              <div className="col-sm-12 col-md-3 col-lg-2 d-flex justify-content-center align-items-center">
                <Avatar
                  alt="Remy Sharp"
                  variant='rounded'
                  src={user?.profilePicture || "/static/images/avatar/1.jpg"}
                  sx={{ width: 120, height: 120 }}
                />
              </div>
              <div className="col-sm-12 col-md-9 col-lg-10">
                <Typography
                 component='div' gutterBottom variant='h5'>Name : {user.firstName + " " + user.lastName}</Typography>
                <Divider />
                <Typography component='div' gutterBottom variant='h6'>Department : {user.department}</Typography>
                <Divider />
                <Typography component='div' gutterBottom variant='h6'>Email Address : {user.email}</Typography>
                <Divider />
                <Typography component='div' variant='subtitle1' gutterBottom>Research Interests : {user.research_interest}
                </Typography>
                <div className="row">
                <div className="col d-flex justify-content-end">{type ? <Button variant='contained' onClick={handleRequest}>Send Request</Button> : ''}</div>
                </div>
                </div>
              </div>
  )
}

export default SupervisorDetails