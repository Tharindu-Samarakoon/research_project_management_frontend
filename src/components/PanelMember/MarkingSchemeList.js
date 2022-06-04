import { Card, CardContent, Typography, TextField, ThemeProvider, Button, Divider } from '@mui/material'
import React from 'react'
import theme from '../theme/Theme'
import '../PanelMember/styles.css'
import MarkingSchemeObject from './MarkingSchemeObject'

const MarkingSchemeList = () => {
  return (
    <ThemeProvider theme = {theme}>
    <div className="container">
    <Card color='primary' variant='outlined' className='bg-light mt-3'>
        <CardContent>

        <div className='main-list'>
        <div className="container mt-2">
          <Typography variant='h4' component='div' gutterBottom >Marking Scheme List</Typography>
          <Divider />
            <MarkingSchemeObject />
            <MarkingSchemeObject />
            <MarkingSchemeObject />
        </div>
        </div>
        
        </CardContent>
    </Card>
    </div>
    </ThemeProvider>
  )
}

export default MarkingSchemeList