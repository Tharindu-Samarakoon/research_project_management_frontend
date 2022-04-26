// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { borderRadius } from '@mui/system';

// const theme = createTheme({
//     palette: {
//       primary: {
//         main: '#061d34',
//       },
//       secondary: {
//           main: '#f5a000'
//       },
//     },
//   });

// const StudentRegistration = () => {

//     const [error, setErrorText] = React.useState();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   const comparePassword = (event) => {
//     const data = new FormData(event.currentTarget);
//     if (data.get('password') !== data.get('confpassword')){
//         setErrorText('Password do not match');
//     } else {
//         setErrorText('');
//     }
//   }

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             border: 'solid',
//             padding: 3,
//             borderRadius: 2,
//             borderWidth: 1
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="First Name" autoFocus />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name" />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField required fullWidth name="regNumber" label="Registration Number" id="regNumber" autoComplete="reg-Number" />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField required fullWidth id="email" label="Student Email Address" name="email" autoComplete="email"  />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField required fullWidth name="confpassword" label="Confirm Password" type="password" id="confpassword" autoComplete="new-password" onChange={comparePassword} helperText={error} error={error} />
//               </Grid>
//             </Grid>
//             <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2}}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="#" variant="body2" >
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }


// export default StudentRegistration;