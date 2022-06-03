import { Card, CardContent, Typography, TextField, ThemeProvider, Button, Divider } from '@mui/material'
import React from 'react'
import theme from '../theme/Theme'
import '../PanelMember/styles.css'
import MarkingSchemeList from './MarkingSchemeList'
import TopicView from './TopicView'

const PanelMemberUI = () => {
    return (
      <ThemeProvider theme={theme}>
          <div className="container">
              <Card color='primary' variant='outlined' className='bg-light mt-3'>
                  <CardContent>
                          <div className='main-list'>
                          <div className="container mt-2">
                          <Typography variant='h4' component='div' gutterBottom >Panel Member</Typography>
                          <Divider />
  
                              <TopicView /> 
                              <MarkingSchemeList /> 
                              
                          </div>
  
                      </div>
                  </CardContent>
              </Card>
          </div>
      </ThemeProvider>
    )
  }
  
  export default PanelMemberUI