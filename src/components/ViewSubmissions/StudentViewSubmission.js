import { ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import NavbarMUI from '../NabarMUI/NavbarMUI'
import theme from '../theme/Theme'
import Base64Downloader from 'common-base64-downloader-react';

const StudentViewSubmission = () => {

    const student = localStorage.getItem('student');
    console.log(JSON.parse(student));

    if(!student) {
        console.log('hello');
        window.location = '/'
    } 

    const currentStudent = JSON.parse(student).user;
    const base64PDF =
    "data:application/pdf;base64,JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAwMDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G";


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
                            <tr>
                                <th scope="row">Document</th>
                                <td>SRS Submission</td>
                                <td>10/2/2022</td>
                                <td>
                                    <Base64Downloader base64={base64PDF} downloadName="pdfDownload">
                                        Something.pdf
                                    </Base64Downloader>
                                </td>
                                <td>
                                    <Base64Downloader base64={base64PDF} downloadName="pdfDownload">
                                        Something.pdf
                                    </Base64Downloader>
                                </td>
                            </tr>
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