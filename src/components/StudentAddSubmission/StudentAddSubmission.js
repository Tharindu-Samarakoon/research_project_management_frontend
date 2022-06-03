import { Button, ThemeProvider, Typography } from '@mui/material';
import React from 'react'
import FileBase from 'react-file-base64';
import { useLocation } from 'react-router-dom';
import NavbarMUI from '../NabarMUI/NavbarMUI';
import theme from '../theme/Theme';

const StudentAddSubmission = () => {

    const student = localStorage.getItem('student');

    if(!student) {
        console.log('hello');
        window.location = '/'
    } 

    const currentStudent = JSON.parse(student).user;

    const location = useLocation();

    //obtaining the state props passed through Link tag
    const { user, submission } = location.state;

    console.log(user);
    console.log(submission);
  return (
    <ThemeProvider theme={theme}>
        <NavbarMUI user={currentStudent}/>
        <div className="container mt-5">
        <Typography variant="h4" color="primary">Add Submission</Typography>
        <div className="container mt-4">
            <div className="row mt-3 p-4 bg-light border g-3">
                <div className="col-sm-12 col-md-6">
                    <b>Submission Name : </b>{submission.description}
                </div>
                <div className="col-sm-12 col-md-6">
                    <b>Submission Deadline : </b>{submission.deadline}
                </div>
                <div className="col-md-12 p-5 d-flex justify-content-center bg-dark mt-5">
                <Button
                variant="contained"
                component="label">
                        <FileBase
                        type="file"
                        style={{width: 0}}
                        multiple={false}
                        hidden={true}
                        // onDone={({ base64 }) => setStudentDetails({ ...studentDetails, profilePicture: base64 })}
                        ></FileBase>
                    </Button>
                </div>
            </div>
        </div>
        </div>
    </ThemeProvider>
  )
}

export default StudentAddSubmission