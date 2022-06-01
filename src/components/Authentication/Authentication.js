
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../../images/SLIIT_Logo.png'
import { bgcolor } from '@mui/system';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { studentLogin } from '../../api';
import { signIn } from '../../actions/auth';


const theme = createTheme({
    palette: {
      primary: {
        main: '#061d34',
      },
    },
  });

const Authentication = () => {

  const [showPassword, setShowPassword] = React.useState(false);

  const dispatch = useDispatch();
  const history = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const result = dispatch(signIn({
      email: data.get('email'),
      password: data.get('password'),
    }, history));
    console.log(result);

  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.pexels.com/photos/5669106/pexels-photo-5669106.jpeg?auto=compress&cs=tinysrgb)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{bgcolor: '#ffff'}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
              
            <Avatar sx={{ width: 100, height: 100, bgcolor: '#ffff'}}>
            <img src={logo} alt='icon' height='70' /> 
            </Avatar>
            <Typography variant='h4'>Research Projects</Typography>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
              <TextField margin="normal" required fullWidth name="password" label="Password" type={showPassword ? 'text' : 'password'} id="password" autoComplete="current-password" InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword} >
                        {showPassword ? <Visibility /> :  <VisibilityOff /> }
                      </IconButton>
                    </InputAdornment>
                  )
                }} />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to='/' color='primary' >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to='/StudentRegistration' color='#061d34' >
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Authentication;