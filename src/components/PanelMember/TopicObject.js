import { Card, CardContent, Typography, TextField, ThemeProvider, Button, Avatar, Divider } from '@mui/material'
import React from 'react'
import theme from '../theme/Theme'
import '../PanelMember/styles.css'

const TopicObject = () => {
  return (
    <div className="row border border-secondary p-3 m-3 rounded">
            <div className="col-sm-12 col-md-3 col-lg-2 d-flex justify-content-center align-items-center">
                <Avatar
                  alt="MS"
                  variant='rounded'
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 120, height: 120 }}
                />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-10">
                <Typography
                 component='div' gutterBottom variant='h5'>Topic : Sample Topic</Typography>
                <Divider />
                <Typography component='div' gutterBottom variant='h6'>Group : G100</Typography>
                <Divider />
                <Typography component='div' variant='subtitle1' gutterBottom>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Excepturi molestias, dolor culpa error modi repellat sed, cumque recusandae quas, fugiat praesentium commodi quo nisi.
                  Cum reiciendis recusandae cumque at quis.
                </Typography>
                <div className="row">
                    <div className="col d-flex justify-content-end">
                    <table><tr><td>
                       <Button variant='contained' className='button-new'>Reject</Button>
                       </td><td>
                       <Button variant='contained'>Accept</Button>
                       </td></tr>
                       </table>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default TopicObject