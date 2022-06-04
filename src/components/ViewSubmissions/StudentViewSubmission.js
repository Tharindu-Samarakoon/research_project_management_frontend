import { ThemeProvider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavbarMUI from '../NabarMUI/NavbarMUI'
import theme from '../theme/Theme'
import Base64Downloader from 'common-base64-downloader-react';
import axios from 'axios';
import { URL } from '../../constants/url';
import { Link } from 'react-router-dom';

const StudentViewSubmission = () => {

    const student = localStorage.getItem('student');
    console.log(JSON.parse(student));

    if(!student) {
        console.log('hello');
        window.location = '/'
    } 

    const [submissions, setSubmissions] = useState([]);

    const currentStudent = JSON.parse(student).user;
    const base64PDF =
    "data:application/pdf;base64,JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAwMDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G";

    useEffect(() => {
        getSubmissions();
    }, []);

    const getSubmissions = async () => {
        try {
            axios.defaults.headers.common["auth-token"] = currentStudent.data;
            const result = await axios.get(URL + '/submissions/get');
            setSubmissions(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    console.log(submissions);

  return (
    <ThemeProvider theme={theme}>
        <NavbarMUI user={currentStudent} />
        <div className="container mt-3">
            <Typography variant='h5' component='div' color='primary'>Submissions</Typography>
            <div className="row mt-3 bg-light p-3">
                <Typography variant='h6' component='div' color='primary'>Pending</Typography>
                <div className="col mt-3">
                    <table class="table table-striped">
                        <thead>
                            <tr className='table-dark'>
                            <th scope="col">Submission Type</th>
                            <th scope="col">Name</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Templates and Documents</th>
                            <th scope="col">Marking Scheme</th>
                            </tr>
                        </thead>
                        <tbody>
                            {submissions.map(
                                (sub) => {
                                    return(
                                        
                                            <tr key={sub._id}>
                                            <th scope="row"><Link to='/studentAddSubmission' state={{ submission: sub, user: currentStudent }} >{sub.submissionType}</Link></th>
                                            <td>{sub.description}</td>
                                            <td>{sub.deadline}</td>
                                            <td>
                                                <Base64Downloader base64={sub.template} downloadName="pdfDownload" style={{border: '#061d34', borderShadow: 2, padding: 5, borderRadius: 2}}>
                                                    Download
                                                </Base64Downloader>
                                            </td>
                                            <td>
                                                <Base64Downloader base64={sub.markingScheme} downloadName="pdfDownload" style={{border: '#061d34', borderShadow: 2, padding: 5, borderRadius: 2}} >
                                                    Download
                                                </Base64Downloader>
                                            </td>
                                            </tr>
                                        
                                    )
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row mt-3 bg-light p-3">
                <Typography variant='h6' component='div' color='primary'>Completed</Typography>
            </div>
        </div>
    </ThemeProvider>
  )
}

export default StudentViewSubmission