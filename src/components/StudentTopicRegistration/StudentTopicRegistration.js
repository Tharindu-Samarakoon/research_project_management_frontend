import { Card, CardContent, Typography, TextField, ThemeProvider, Button } from '@mui/material'
import React from 'react'
import theme from '../theme/Theme'

const StudentTopicRegistration = () => {
  return (
    <ThemeProvider theme={theme}>
        <div className="container">
            <Card color='primary' variant='outlined' className='bg-light mt-3'>
                <CardContent>
                    <Typography component='div' variant='h5'>Topic Registration</Typography>
                    <div className="row gy-3 mt-2">
                        <div className="col-sm-12 col-md-6">
                            <TextField
                              id="Topic"
                              label="Topic*"
                              fullWidth
                            />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <TextField
                              id="Group"
                              label="Group*"
                              disabled
                              value={'WE_2022_42'}
                              fullWidth
                            />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col d-flex justify-content-end">
                            <Button variant='contained'>Submit</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </ThemeProvider>
  )
}

export default StudentTopicRegistration