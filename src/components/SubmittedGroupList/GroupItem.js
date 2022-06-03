import axios from "axios";
import React, { useEffect, useState } from "react";
import {Card,Grid} from '@mui/material'
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { URL } from "../../constants/url";



const GroupItem = ({ group,classes }) => {
  
  const [ setGroups] = useState([]);
  
  return (

  
    <Card className={classes.root}>
<CardActionArea>
<CardMedia
  className={classes.media}
  image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  title="Group project"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="h2">
  <b>Project Name :</b> {group.topic}
  </Typography>
  <div className="row">
                    {/* <EmailIcon /> */}
 <Typography component='div' variant='subtitle1' gutterBottom><b>Group :</b> {group._id || 'Not Assigned'}</Typography>
                </div>
 
</CardContent>
</CardActionArea>
<CardActions>
<Button size="small"></Button>
</CardActions>

</Card>
    // {/* // <tr className="cartCol">
    // //   <td scope="row"></td>
    // //   <td>
    // //     <img
    // //       src={user.image || "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"}
    // //       alt="user image"
    // //       className="movieImg"
    // //     />
    // //   </td>
    // //   <td>{user.firstName}</td>
    // //   <td>{user.lastName}</td>
    // //   <td>{user.email}</td>

    // //   <td>
        
    // //     <button  className="btn btn-danger" onClick={ () => deleteUsers(user._id)}>Delete </button>
      
    // //   </td>
  
     
    // // </tr> */}
  );
};

export default GroupItem;
