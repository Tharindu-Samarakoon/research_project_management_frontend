import { Card, CardContent, Typography, TextField, ThemeProvider, Button } from '@mui/material'
import {URL} from '../../constants/url'
import React, { useState } from 'react'
import theme from '../theme/Theme'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavbarMUI from '../NabarMUI/NavbarMUI';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const StudentTopicRegistration = () => {

    const student = localStorage.getItem('student');

    if(!student) {
        console.log('hello');
        window.location = '/'
    } 

    const currentStudent = JSON.parse(student).user;

    const [topic, setTopic] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(topic);
            const res = await axios.post(URL+'/studentGroups/addTopic/'+currentStudent.group, {topic: topic});
            console.log(res);
            if(res.status >= 200 && res.status < 400){
                toast.success("Topic Submitted Successfully");
                setTimeout(() => {
                  window.location = '/studentProfile'
                }, 2000)}
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <ThemeProvider theme={theme}>
        <NavbarMUI user={currentStudent}/>
        <ToastContainer position='top-center' />
        <div className="container">
            <Card color='primary' variant='outlined' className='bg-light mt-3'>
                <CardContent>
                    <Typography component='div' variant='h5'>Topic Registration</Typography>
                    <div className="row gy-3 mt-2">
                        <div className="col-sm-12 col-md-6">
                            <TextField
                              id="Topic"
                              label="Topic*"
                              value={topic}
                              onChange={(e) => {setTopic(e.target.value)}}
                              fullWidth
                            />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <TextField
                              id="Group"
                              label="Group*"
                              disabled
                              value={currentStudent.group}
                              fullWidth
                            />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col d-flex justify-content-end">
                            <Button variant='contained' onClick={handleSubmit} >Submit</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </ThemeProvider>
  )
}

export default StudentTopicRegistration