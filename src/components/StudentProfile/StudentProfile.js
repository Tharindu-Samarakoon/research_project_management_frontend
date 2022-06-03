import { Avatar, Card, Container, Divider, Grid, ListItem, Paper, Typography, List, ListItemAvatar, ThemeProvider, Button  } from '@mui/material'
import profile from '../../images/profile.jpg';
import { bgcolor, Box } from '@mui/system'
import EmailIcon from '@mui/icons-material/Email'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import GroupIcon from '@mui/icons-material/Group';
import ScienceIcon from '@mui/icons-material/Science';
import DeleteIcon from '@mui/icons-material/Delete'
import React from 'react'
import Navbar from '../Navbar/Navbar'

import useStyles from './styles';
import GroupDetails from './GroupDetails/GroupDetails';
import { IconButton } from '@material-ui/core';
import theme from '../theme/Theme';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavbarMUI from '../NabarMUI/NavbarMUI';

const StudentProfile = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const student = localStorage.getItem('student');
    console.log(JSON.parse(student));

    if(!student) {
        console.log('hello');
        window.location = '/'
    } 

    const currentStudent = JSON.parse(student).user;

    const handleUpdate = () => {
        localStorage.clear();
        navigate('/');
    }

    console.log(currentStudent);


  return (
    // <Paper sx={{backgroundColor: '#f5a000'}}>
    //     <Navbar />
    //     <div className={classes.profBody}>
    //         <Grid container spacing={2}>
    //             <Grid item xs={12} md={4} sm={6} xl={3} height={120} justifyContent='center' padding={2}>
    //                 <Container variant='outlined' sx={{display:'flex', justifyContent:'center', height:'250px'}}>
    //                     <Avatar src='https://zipmex.com/static/d1af016df3c4adadee8d863e54e82331/1bbe7/Twitter-NFT-profile.jpg' 
    //                         title='Profile pic'
    //                         variant='circle'
    //                         sx={{height: 160, width: 160, margin: 5}}/>
                        
    //                 </Container>
    //                 <Container sx={{padding: 5, display: 'flex', justifyContent:'center', height: 600, marginTop: 2}} variant='outlined'>
    //                     <GroupDetails />
    //                 </Container>
    //             </Grid>
    //             <Grid item xs={12} md={8} sm={6} xl={9} height={120}>
    //                 <Container sx={{padding: 5, height:'250px'}} variant='outlined'>
    //                     <Typography className={classes.studentDetailsHeading} variant='h6'>User Details</Typography>
    //                     <Typography className={classes.studentDetails} >Aurther Morgan</Typography>
    //                     <Typography className={classes.studentDetails} >it20252632@my.sliit.lk</Typography>
    //                     <Typography className={classes.studentDetails} >Group : </Typography>
    //                     <Typography className={classes.studentDetails} >Research Topic : </Typography>
    //                 </Container>
    //                 <Container variant='outlined' sx={{height: 600, padding: 5, marginTop: 2}}>
    //                     <Typography className={classes.studentDetails} variant='h4'>Submissions</Typography>
    //                 </Container>
    //             </Grid>
    //         </Grid>
    //     </div>
    // </Paper>
    <ThemeProvider theme={theme}>
        <NavbarMUI user={currentStudent}/>
    <div className="container mt-3">
        <div className="row bg-light p-2">
            <div className="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center">
                <Avatar
                    alt="Remy Sharp"
                    variant='circle'
                    src={currentStudent.profilePicture}
                    sx={{ width: 200, height: 200 }}
                />
            </div>
            <div className="col-sm-12 col-md-8 col-lg-9 align-items-bottom pt-3">
                <div className="row">

                    <Typography component='div' variant='h5' gutterBottom>{currentStudent.firstName + " " + currentStudent.lastName}</Typography>
                </div>
                <Divider variant='middle' color='primary' />
                <div className="row">
                    <EmailIcon />
                    <Typography component='div' variant='subtitle1' gutterBottom><b>Email Address :</b> {currentStudent.email}</Typography>
                </div>
                <div className="row">
                    <Typography component='div' variant='subtitle1' gutterBottom><b>Contact Number :</b> {currentStudent.contactNum}</Typography>
                </div>
                <Divider variant='middle' color='primary' />
                <div className="row">
                    <Typography component='div' variant='subtitle1' gutterBottom><b>Registration No :</b> {currentStudent.regNumber}</Typography>
                    <Typography component='div' variant='subtitle1' gutterBottom><b>Group :</b> {currentStudent.group || 'Not Assigned'}</Typography>
                </div>
            </div>
            <div className="col-sm-12 d-flex justify-content-end gy-2">
                <Button variant="text" size='small' startIcon={<ManageAccountsIcon />} onClick={handleUpdate}>
                Update Profile
                </Button>
                <Button variant="text" size='small' startIcon={<ScienceIcon />} href='/studentTopicReg'>
                Research Topic
                </Button>
                <Button variant="text" size='small' startIcon={<GroupIcon />} href='/studentGroupReg'>
                Group Details
                </Button>
            </div>
        </div>
        <div className="row mt-3 g-2">
            <div className="col-sm-12 col-md-6 mt-5 bg-light p-1">
            <Typography variant="h5" color="primary">Submissions</Typography>
                <Divider variant='middle'/>
                <List >
                        <ListItem>
                            <Typography component='div' variant='subtitle1' gutterBottom >Topic Submission</Typography>
                        </ListItem>
                    </List>
                </div>  
            <div className="col-sm-12 col-md-6 mt-5 bg-light p-1">{currentStudent.group ? <GroupDetails group={currentStudent.group} leader={currentStudent.email} /> : ""}</div>
        </div>
    </div>
    </ThemeProvider>
  )
}

export default StudentProfile