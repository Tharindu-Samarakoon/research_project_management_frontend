import { Card, CardContent, Typography, TextField, ThemeProvider, Button, Divider } from '@mui/material'
import React from 'react'
import theme from '../theme/Theme'
import '../PanelMember/styles.css'
import MarkingSchemeObject from './MarkingSchemeObject'
import TopicObject from './TopicObject'

const TopicView = () => {
  return (
    <ThemeProvider theme={theme}>
        <div className="container">
            <Card color='primary' variant='outlined' className='bg-light mt-3'>
                <CardContent>
                    
                        <div className='main-list'>
                        <div className="container mt-2">
                        <Typography variant='h4' component='div' gutterBottom >Topic List View</Typography>
                        <Divider />
                            <TopicObject />
                            <TopicObject />
                            <TopicObject />
                        </div>
                    </div>
                    
                </CardContent>
            </Card>
        </div>
    </ThemeProvider>
  )
}

export default TopicView