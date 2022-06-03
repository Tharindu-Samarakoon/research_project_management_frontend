import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { borderRadius } from '@mui/system';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@material-ui/icons';
import { useDispatch } from 'react-redux'
import FileBase from "react-file-base64";

import {useLocation, useNavigate} from 'react-router-dom';

import useStyles from './styles'
import { studentRegistration } from '../../actions/auth';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from 'axios';
import { URL } from '../../constants/url';

const theme = createTheme({
    palette: {
      primary: {
        main: '#061d34',
      },
      secondary: {
          main: '#f5a000'
      },
    },
  });

const StudentRegistration = () => {

  const student = localStorage.getItem('student');
    console.log(JSON.parse(student));

  let currentStudent;

  const classes = useStyles();
  const location = useLocation();
  const [type, setType] = React.useState(true);

 // const dispatch = useDispatch();
  const [error, setErrorText] = React.useState();
  const [studentDetails, setStudentDetails] = React.useState({firstName: '', lastName: '', regNumber: '', email: '', password: '', contactNum: '', profilePicture: '', dob: '' });
  const [confPassword, setConfPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false)
  const [isValid, setIsValid] = React.useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();

  // if(student) {
  //   console.log('hello');
  //   currentStudent = JSON.parse(student).user;
  //   setStudentDetails(currentStudent);
  //   type = true;
  // }

  React.useEffect(() => {
      if(student) {
      console.log('hello');
      currentStudent = JSON.parse(student).user;
      setStudentDetails(currentStudent);
      setType(false);
  }}, student);

  const comparePassword = (event) => {
    if (studentDetails.password !== confPassword){
        setErrorText('Password do not match');
        return false;
    } else {
        setErrorText('');
        return true;
    }
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(comparePassword()) {
      console.log(studentDetails);
      const result = dispatch(studentRegistration(studentDetails, history));
      console.log(result);
    } else if (!type) {
      console.log('Updating Profile');
      console.log(studentDetails);
      currentStudent = JSON.parse(student).user;
      const result = await axios.patch(URL+'/student/update/'+currentStudent._id, studentDetails);
      console.log(result);
      let updateduser = JSON.parse(student);
      updateduser.user = result.data;
      localStorage.setItem('student', JSON.stringify(updateduser));
      history('/studentProfile');
    }

    

    

  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: 'solid',
            padding: 3,
            borderRadius: 2,
            borderWidth: 1
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {type? 'Sign Up' : 'Update Profile'}
          </Typography>
          <form component="form" onSubmit={handleSubmit} style={{ marginTop: 10 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField autoComplete="given-name" name="firstName" value={studentDetails.firstName} required fullWidth id="firstName" label="First Name" autoFocus onChange={(e) => setStudentDetails({ ...studentDetails, firstName: e.target.value })} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="lastName" label="Last Name" name="lastName" value={studentDetails.lastName} autoComplete="family-name" onChange={(e) => setStudentDetails({ ...studentDetails, lastName: e.target.value })} />
              </Grid>
              {type? 
                <Grid item xs={12} md={6} >
                <TextField required fullWidth name="regNumber" value={studentDetails.regNumber} inputProps={{ }} label="Registration Number" id="regNumber" autoComplete="reg-Number" onChange={(e) => setStudentDetails({ ...studentDetails, regNumber: e.target.value })} />
                </Grid>
              :
              ''}
              <Grid item xs={12} md={6} >
                <TextField required fullWidth name="contactNum" value={studentDetails.contactNum} inputProps={{}} label="Contact Number" id="contactNum" autoComplete="contact-Number" onChange={(e) => setStudentDetails({ ...studentDetails, contactNum: e.target.value })} />
              </Grid>
              
                {type? 
                        <>
                        <Grid item xs={12} >
                        <TextField required fullWidth id="email" value={studentDetails.email} label="Student Email Address" name="email" autoComplete="email" onChange={(e) => setStudentDetails({ ...studentDetails, email: e.target.value }) } />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField required fullWidth name="password" label="Password" value={studentDetails.password} type={showPassword ? 'text' : 'password'} id="password" autoComplete="new-password" onChange={(e) => setStudentDetails({ ...studentDetails, password: e.target.value })} InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword} >
                                  {showPassword ? <Visibility /> :  <VisibilityOff /> }
                                </IconButton>
                              </InputAdornment>
                            )
                          }} />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField required fullWidth name="confpassword" value={confPassword} label="Confirm Password" type="password" id="confpassword" autoComplete="new-password" onChange={(e) => {setConfPassword(e.target.value)}} helperText={error} error={!!error} />
                        </Grid>
                        </>
                            :
                            <Grid item xs={12} >
                        <TextField disabled required fullWidth id="email" value={studentDetails.email} label="Student Email Address" name="email" autoComplete="email" onChange={(e) => setStudentDetails({ ...studentDetails, email: e.target.value }) } />
                        </Grid> }
              <Grid item xs={12}>
              <Button
                variant="contained"
                component="label">
                <FileBase
                  type="file"
                  className={classes.profilePic}
                  style={{width: 0}}
                  multiple={false}
                  hidden={true}
                  onDone={({ base64 }) => setStudentDetails({ ...studentDetails, profilePicture: base64 })}
                ></FileBase>
                </Button>
                </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2}}
            >
              {type? 'Sign up' : 'Update Details'}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2" >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}


export default StudentRegistration;