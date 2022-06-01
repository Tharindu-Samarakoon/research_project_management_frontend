import { Card, CardContent, Typography, TextField, ThemeProvider, Button } from '@mui/material'
import React from 'react'
import theme from '../theme/Theme'

const MarkingSchemeList = () => {
  return (
    <ThemeProvider theme={theme}>
        <div className="container">
            <Card color='primary' variant='outlined' className='bg-light mt-3'>
                <CardContent>
                    <Typography component='div' variant='h5'>Marking Scheme List</Typography>
                    <div className="row gy-3 mt-2">
                        Hello
                    </div>
                </CardContent>
            </Card>
        </div>
    </ThemeProvider>
  )
}

export default MarkingSchemeList