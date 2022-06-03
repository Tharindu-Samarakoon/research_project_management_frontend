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
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { borderRadius, spacing } from '@mui/system';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@material-ui/icons';
// import { useDispatch } from 'react-redux'

import useStyles from './styles'
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

const GroupTopicAccept = () => {

  const [group, setGroup] = useState([]);

  useEffect(() => {
    getGroup();
  }, []);


  const classes = useStyles();

  const getGroup = async () => {
    try {
      
      const group = await axios.get(URL+"/studentGroups/getGroup/_id");
      setGroup(group.data);
    } catch (error) {
      console.log(error);
    }
  };

    

  


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
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
            <CheckCircleTwoToneIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Topic Accepting
          </Typography>
          <form component="form" onSubmit={handleSubmit} style={{ marginTop: 10 }}>
       
            
                 <td>{group.topic}</td>
                    <td>{group.supervisor}</td>
                  <td>{group.leader}</td>
              
            
        
              
            <br>
            </br>

            

            <Button type="submit" fullWidth variant="contained" xs={6} sm={6}
            
            >
              Accept
            </Button>
  
            <Button type="submit" fullWidth variant="contained"sx={{ mt: 3, mb: 2 }}
            >
              Reject
            </Button>
  
              
            <Button href="#" fullWidth variant="contained" sx={{ mt: 3, mb: 2}}
            >
              cancel
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
               
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}


export default GroupTopicAccept;