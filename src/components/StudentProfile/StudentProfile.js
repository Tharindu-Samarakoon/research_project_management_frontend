import { Avatar, Card, Container, Grid, Paper, Typography } from '@mui/material'
import profile from '../../images/profile.jpg';
import { bgcolor, Box } from '@mui/system'
import React from 'react'
import Navbar from '../Navbar/Navbar'

import useStyles from './styles';
import GroupDetails from './GroupDetails/GroupDetails';

const StudentProfile = () => {
    const classes = useStyles();
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
    <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-3">
                <Avatar
                    alt="Remy Sharp"
                    variant='rounded'
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 120, height: 120 }}
                />
            </div>
            <div className="col-sm-12 col-md-8 col-lg-9">
                
            </div>
        </div>
        <div className="row"></div>
    </div>
  )
}

export default StudentProfile