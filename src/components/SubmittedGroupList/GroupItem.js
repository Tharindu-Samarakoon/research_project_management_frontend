import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Grid } from "@mui/material";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PageviewTwoToneIcon from "@mui/icons-material/PageviewTwoTone";
import { URL } from "../../constants/url";
import GroupTopicAccept from "../GroupTopicAccept/GroupTopicAccept";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const GroupItem = ({ group, classes }) => {

  
   

  const [groups, setGroups] = useState([]);

  function GroupTopicAccept() {
    let navigate = useNavigate();
    window.location = "/topicAccept";
  }

  return (

      
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://st2.depositphotos.com/7874342/11462/v/950/depositphotos_114625578-stock-illustration-business-meeting-presentation-of-the.jpg"
                title="Group project"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <b>Project Name :</b> {group.topic}
                </Typography>
                <div className="row">
                  {/* <EmailIcon /> */}
                  <Typography component="div" variant="subtitle1" gutterBottom>
                    <b>Group :</b> {group._id || "Not Assigned"}
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
            <Link to="/topicAccept" state={{ type: "update", groups: group }}>
              <CardActions>
                <Button variant="outlined"  color="primary" value={group._id}>
                  {<PageviewTwoToneIcon />}VIEW
                </Button>
              </CardActions>
            </Link>
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

    // //   </td> // // </tr> */}
  );
};
<br></br>;

export default GroupItem;
