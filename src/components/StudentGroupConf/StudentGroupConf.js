import { Avatar, Button, Card, CardContent, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, TextField, ThemeProvider, Typography } from '@mui/material'
import React, { useState } from 'react'
import theme from '../theme/Theme'
import CheckIcon from '@mui/icons-material/Check';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import './styles.css'
import axios from 'axios';
import { URL } from '../../constants/url';
import NavbarMUI from '../NabarMUI/NavbarMUI';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#061d34",
      color: "white"
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));




const StudentGroupConf = () => {

    let student = localStorage.getItem('student');
    console.log(JSON.parse(student));
  
    if(!student) {
        console.log('hello');
        window.location = '/'
    }
    
    let currentStudent1 = JSON.parse(student);
    const currentStudent = JSON.parse(student).user;

    const [details, setDetails] = useState(true);
    const [groupMembers, setGroupMembers] = useState({
        member1: '',
        member2: '',
        member3: ''
    });
    const [verifiedMembers, setVerifiedMembers] = useState([]);
    const [groupForm, setGroupForm] = useState(false);

    const handleChange = (e) => {
        setGroupMembers({...groupMembers, [e.target.name]: e.target.value});
    }

    const handleVerify = async (e) => {
        e.preventDefault();

        const members = await axios.post(URL + '/studentGroups/verify', groupMembers);

        setVerifiedMembers(members.data);

        setGroupForm(true);
    }

    const handleClear = async () => {
        setDetails(true);
        setGroupForm(false)
    }

    const handleRegistration = async () => {
        console.log('IF Working');
        try {
            const groupFinal = {members: [groupMembers.member1, groupMembers.member2, groupMembers.member3], group: {leader: currentStudent.email}};
            const res = await axios.post(URL + '/studentGroups/addGroup', groupFinal);
            console.log(groupFinal);
            console.log(res);
            currentStudent1.user.group = res.data._id;
            student = JSON.stringify(currentStudent1);
            localStorage.setItem('student', student);
            if(res.status >= 200 && res.status < 400){
                toast.success("Group Created Successfully");
                setTimeout(() => {
                  window.location = '/studentProfile'
                }, 2000)
              }
            
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <ThemeProvider theme={theme}>
        <NavbarMUI />
        <ToastContainer position='top-center' />
        <div className="container groupContainer mt-4">
            <div className="row bg-light d-flex justify-content-center mt-3 p-3 rounded-2">
                <form action="" className='row gy-4' onSubmit={handleVerify}>
                    <Typography component='div' variant='h5'>Group Members</Typography>
                    <div className="col-sm-12">
                        <TextField required id='member1' name='member1' variant='outlined' label='Group Member 1 Email*' fullWidth onChange={handleChange} /> 
                    </div>
                    <div className="col-sm-12">
                        <TextField required id='member2' name='member2' variant='outlined' label='Group Member 2 Email*' fullWidth onChange={handleChange} /> 
                    </div>
                    <div className="col-sm-12">
                        <TextField required id='member3' name='member3' variant='outlined' label='Group Member 3 Email*' fullWidth onChange={handleChange} /> 
                    </div>
                    <div className="col d-flex justify-content-end">
                        <Button variant='contained' className='me-3' type='reset' onClick={handleClear}  sx={{width: 150}} startIcon={<CancelPresentationIcon sx={{color: 'red'}}/>}>Clear</Button>
                        <Button variant='contained' type='submit' sx={{width: 150}} startIcon={<HourglassBottomIcon/>}>Verify</Button>
                    </div>
                </form>
            </div>
            {groupForm&&verifiedMembers?
            <div className="row mt-4">
                <div className="col-sm-12 p-3 bg-light">
                    <TableContainer component={Card}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell maxwidth={30}></StyledTableCell>
                                    <StyledTableCell>
                                        Student Name</StyledTableCell>
                                    <StyledTableCell>Email</StyledTableCell>
                                    <StyledTableCell>Availability</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <StyledTableCell><Avatar src={currentStudent.profilePicture} /></StyledTableCell>
                                    <TableCell>{currentStudent.firstName + ' ' + currentStudent.lastName}</TableCell>
                                    <TableCell>{currentStudent.email}</TableCell>
                                    <TableCell>{currentStudent.group? 'Not Available' : 'Available'}</TableCell>
                                </TableRow>
                                {verifiedMembers.map((student, i) => {
                                    console.log(student);
                                    return(
                                    <TableRow key={i}>
                                        <StyledTableCell><Avatar src={student.profilePicture} /></StyledTableCell>
                                        <TableCell>{student.firstName + ' ' + student.lastName}</TableCell>
                                        <TableCell>{student.email}</TableCell>
                                        <TableCell>{student.group? <span color='red'>'Not Available'</span> : 'Available'}</TableCell>
                                    </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className="col-sm-12 d-flex justify-content-end mt-3">
                        {verifiedMembers[0].group || verifiedMembers[1].group || verifiedMembers[2].group ? 
                        <>
                            <Typography component='div' variant='subtitle1' color='red'>One or more of the students are already in groups</Typography>
                            <Button variant='contained' disabled sx={{width: 150}} startIcon={<CheckIcon/>}>Confirm</Button>
                        </>
                        :
                        <Button variant='contained' sx={{width: 150}} onClick={handleRegistration} startIcon={<CheckIcon/>}>Confirm</Button>    
                    }
                    </div> 
                </div>
            </div>
            : ''}
        </div>
    </ThemeProvider>
  )
}

export default StudentGroupConf