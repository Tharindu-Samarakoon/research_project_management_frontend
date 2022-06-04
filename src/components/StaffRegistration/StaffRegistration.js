import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { borderRadius } from '@mui/system';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@material-ui/icons';
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';
import { staffRegistration } from '../../actions/auth';
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


const StaffRegistration = () => {

 // const dispatch = useDispatch();
  const [error, setErrorText] = React.useState();
  const [staffDetails, setStaffDetails] = React.useState({firstName:'', lastName:'', department:'', role:'',research_interest:'', email:'', password:''});
  const [confPassword, setConfPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false)
  const [isValid, setIsValid] = React.useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();
  

  const comparePassword = (event) => {
    // console.log(staffDetails.password + typeof staffDetails.password );
    // console.log(confPassword + typeof confPassword );
    if (staffDetails.password !== confPassword){
        setErrorText('Password do not match');
        return false
    } else {
        setErrorText('');
        return true
    }
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    if(comparePassword()) {
      console.log(staffDetails);
      try{
const result = await axios.post(URL+"/staff/register",staffDetails)
console.log(result);
history ("/group")
      }catch (error){
         console.log(error);

      }

    }
    

    

  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
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
             Staff Sign up
          </Typography>
          <form component="form" onSubmit={handleSubmit} style={{ marginTop: 10 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField autoComplete="given-name" name="firstName" value={staffDetails.firstName} required fullWidth id="firstName" label="First Name" autoFocus onChange={(e) => setStaffDetails({ ...staffDetails, firstName: e.target.value })} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="lastName" label="Last Name" name="lastName" value={staffDetails.lastName} autoComplete="family-name" onChange={(e) => setStaffDetails({ ...staffDetails, lastName: e.target.value })} />
              </Grid>
             
              <Grid item xs={12}>
              <InputLabel id="demo-simple-select-label">Department</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="department"
          value={staffDetails.department}
          label="department"
          onChange={(e) => setStaffDetails({ ...staffDetails, department: e.target.value })}
        >
          <MenuItem value={"Software Engineering and Computer Science"}>Software Engineering and Computer Science</MenuItem>
          <MenuItem value={"Computer Systems and Network Engineering"}>Computer Systems and Network Engineering</MenuItem>
          <MenuItem value={"Data Science"}>Data Science</MenuItem>
          <MenuItem value={"Information Technology"}>Information Technology</MenuItem>
        </Select>
              </Grid>
              <Grid item xs={12}>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="role"
          value={staffDetails.role}
          label="role"
          onChange={(e) => setStaffDetails({ ...staffDetails, role: e.target.value })}
        >
          <MenuItem value={"supervisor"}>Supervisor</MenuItem>
          <MenuItem value={"coSupervisor"}>Co-Supervisor</MenuItem>
          <MenuItem value={"panelMember"}>Panel Member</MenuItem>
        </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name="research_interest" value={staffDetails.research_interest} label="Research Interest" id="research_interest" autoComplete="research_interest" onChange={(e) => setStaffDetails({ ...staffDetails, research_interest: e.target.value })} />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="email" value={staffDetails.email} label="Staff Email Address" name="email" autoComplete="email" onChange={(e) => setStaffDetails({ ...staffDetails, email: e.target.value }) } />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name="password" label="Password" value={staffDetails.password} type={showPassword ? 'text' : 'password'} id="password" autoComplete="new-password" onChange={(e) => setStaffDetails({ ...staffDetails, password: e.target.value })} InputProps={{
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
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2}}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" >
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


export default StaffRegistration;