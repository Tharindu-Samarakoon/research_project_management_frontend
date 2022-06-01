import { Avatar, Button, Card, CardContent, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, TextField, ThemeProvider, Typography } from '@mui/material'
import React, { useState } from 'react'
import theme from '../theme/Theme'
import CheckIcon from '@mui/icons-material/Check';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import './styles.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#061d34",
      color: "white"
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

const StudentGroupConf = () => {

    const [details, setDetails] = useState(true);


  return (
    <ThemeProvider theme={theme}>
        <div className="container groupContainer">
            <div className="row bg-light d-flex justify-content-center gy-4  mt-3 p-3 rounded-2">
                <Typography component='div' variant='h5'>Group Members</Typography>
                <div className="col-sm-12">
                    <TextField id='member1' variant='outlined' label='Group Member 1 Email*' fullWidth/> 
                </div>
                <div className="col-sm-12">
                    <TextField id='member2' variant='outlined' label='Group Member 2 Email*' fullWidth /> 
                </div>
                <div className="col-sm-12">
                    <TextField id='member3' variant='outlined' label='Group Member 3 Email*' fullWidth /> 
                </div>
                <div className="col d-flex justify-content-end">
                    <Button variant='contained' sx={{width: 150}} startIcon={<HourglassBottomIcon/>}>Verify</Button>
                </div>
            </div>
            {details ?
            <div className="row mt-4">
                <div className="col-sm-12 p-3 bg-light">
                    <TableContainer component={Card}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell maxwidth={30}></StyledTableCell>
                                    <StyledTableCell>
                                        Student Name</StyledTableCell>
                                    <StyledTableCell>Email</StyledTableCell>
                                    <StyledTableCell>Availability</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <StyledTableCell><Avatar/></StyledTableCell>
                                    <TableCell>Student Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Availability</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className="col-sm-12 d-flex justify-content-end mt-3">
                        <Button variant='contained' sx={{width: 150}} startIcon={<CheckIcon/>}>Confirm</Button>
                    </div> 
                </div>
            </div>
            : ''}
        </div>
    </ThemeProvider>
  )
}

export default StudentGroupConf