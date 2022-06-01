import React from'react';
import {Card,Grid} from '@mui/material'
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const SubmittedGroupList=()=>{

    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
      });

    const classes = useStyles();
    return<div>
        <Grid container spacing={3}>
            <Grid item xs={3}>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          title="Group project"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Group Number :(retrieve the group number)
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            add the project name retrieve it
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small"></Button>
      </CardActions>
      
    </Card>
    
            </Grid>
      </Grid>
  </div>;
};
export default SubmittedGroupList ;


