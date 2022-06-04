import { TableContainer, TableHead, Table, TableRow, TableCell, TableBody, Paper, Avatar, Typography, createTheme } from '@mui/material';
import React from 'react'

const GroupDetails = () => {

    const theme = createTheme({
        palette: {
          primary: {
            main: '#061d34',
          },
          secondary: {
              main: '#f5a000'
          },
        },
      });

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];

  return (
    <div>
        <Typography variant='h6'>Group Members</Typography>
        <br />
        <TableContainer sx={{borderColor: 'primary'}}>
      <Table sx={{ borderRadius: 1, borderStyle: 'hidden'}} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right"><Avatar src='https://www.youloveit.com/uploads/posts/2021-08/1628604849_youloveit_com_frozen_cute_profile_pictures_elsa_and_anna04.jpg' /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default GroupDetails