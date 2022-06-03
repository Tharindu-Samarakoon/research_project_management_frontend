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
import FactCheckTwoToneIcon from '@mui/icons-material/FactCheckTwoTone';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { borderRadius, spacing } from '@mui/system';
import { IconButton, InputAdornment, InputLabel, MenuItem, Select } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@material-ui/icons';
import {useEffect, useState} from 'react';
// import { useDispatch } from 'react-redux'

import useStyles from './styles'
import { URL } from '../../constants/url';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

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

  const location = useLocation();



  const {groups} =location.state;


  console.log(groups)


  const [group, setGroup] = useState([]);

  useEffect(() => {
    getGroup();

  }, []);

  const getGroup = async () => {
    try {
      
      const group = await axios.get(URL+"/studentGroups/getGroup/"+group._id);
      setGroup(group.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(group)

 


  const classes = useStyles();


  const handleChange = ({ currentTarget: input }) => {
    setData({ ...group, [input.name]: input.value });
  };


  
  const deniedTopic = async () =>{
    try {
      console.log(groups)
      const groupList = await axios.post(URL+"/studentGroups/topicD/"+groups._id);
      console.log(groups)
   }
   catch (error){
     console.log(error);
   }
 }

 console.log()


  const acceptTopic = async () => {
    try {
      console.log(groups)
      const groupList = await axios.post(URL+"/studentGroups/topicA/"+groups._id);
      console.log()
    } catch (error) {
      console.log(error);
    }
  };

  console.log(group)
    

  


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
            <FactCheckTwoToneIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
           Topic Accepting
          </Typography>
          <br></br><br></br>
          <div className="row">
                  
 <Typography component='div' variant='subtitle1' gutterBottom><b>Topic :</b> {groups.topic || 'Not Assigned'}</Typography>
 <Typography component='div' variant='subtitle1' gutterBottom><b>Group ID :</b> {groups._id || 'Not Assigned'}</Typography>
 <Typography component='div' variant='subtitle1' gutterBottom><b>Leader :</b> {groups.leader || 'Not Assigned'}</Typography>
                </div>
                
            
          <form component="form"  onSubmit={handleChange}  style={{ marginTop: 10 }}>
        
       
        
              
            <br>
            </br>

            {/* <Grid item xs={12}>
              <InputLabel id="demo-simple-select-label">Topic Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="role"
          value={groups.topicStatus}
          label="role"
          onChange={(e) => groups({ ...groups, topicStatus: e.target.value })}
        >
          <MenuItem value={"accepted"}>Accepted</MenuItem>
          <MenuItem value={"denied"}>Denied</MenuItem>
          <MenuItem value={"panelMember"}>Panel Member</MenuItem>
        </Select>a
              </Grid> */}
            

            <Button type="button" onClick={acceptTopic} fullWidth variant="contained" xs={6} sm={6}
            > Accept
            </Button>
      
            <Button type="button" onClick={deniedTopic} fullWidth variant="contained"sx={{ mt: 3, mb: 2 }}
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