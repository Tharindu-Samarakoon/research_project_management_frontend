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

  const dispatch = useDispatch();
  const [error, setErrorText] = React.useState();
  const [studentDetails, setStudentDetails] = React.useState({firstName: '', lastName: '', regNumber: '', studentEmail: '', password: '' });
  const [confPassword, setConfPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false)
  const [isValid, setIsValid] = React.useState(false);

  

  const comparePassword = (event) => {
    console.log(studentDetails.password + typeof studentDetails.password );
    console.log(confPassword + typeof confPassword );
    if (studentDetails.password !== confPassword){
        setErrorText('Password do not match');
        setIsValid(false);
    } else {
        setErrorText('');
        setIsValid(true);
    }
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    comparePassword();
    
    if(isValid) {
      console.log(studentDetails);

      dispatch(studentDetails);

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
            Sign up
          </Typography>
          <form component="form" onSubmit={handleSubmit} style={{ marginTop: 10 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField autoComplete="given-name" name="firstName" value={studentDetails.firstName} required fullWidth id="firstName" label="First Name" autoFocus onChange={(e) => setStudentDetails({ ...studentDetails, firstName: e.target.value })} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="lastName" label="Last Name" name="lastName" value={studentDetails.lastName} autoComplete="family-name" onChange={(e) => setStudentDetails({ ...studentDetails, lastName: e.target.value })} />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name="regNumber" value={studentDetails.regNumber} label="Registration Number" id="regNumber" autoComplete="reg-Number" onChange={(e) => setStudentDetails({ ...studentDetails, regNumber: e.target.value })} />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="email" value={studentDetails.studentEmail} label="Student Email Address" name="email" autoComplete="email" onChange={(e) => setStudentDetails({ ...studentDetails, studentEmail: e.target.value }) } />
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


export default StudentRegistration;