import { TableContainer, TableHead, Table, TableRow, TableCell, TableBody, Paper, Avatar, Typography, createTheme, Divider } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { URL } from '../../../constants/url';

const GroupDetails = ({group, leader}) => {

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

    const [students, setStudent] = useState([]);

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];

      useEffect( ()=> {
        getGroupStudents();
      }, [])

      const getGroupStudents = async () => {
        try {
          const groupDetail = await axios(URL + '/studentGroups/getGroupDetails/' + group);
          setStudent(groupDetail.data.students);
          console.log(groupDetail);
        } catch (error) {
          console.log(error);
        }
      }

      console.log(students);
      console.log(group);
      console.log(leader);

  return (
    <div>
        <Typography variant='h6' color="primary">Group Members</Typography>
        <Divider variant='middle'/>
        <TableContainer sx={{borderColor: 'primary'}}>
      <Table sx={{ borderRadius: 1, borderStyle: 'hidden'}} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.firstName + " " + row.lastName + " "}{leader===row.email? <span class="badge text-bg-info">Leader</span> : '' }</TableCell>
              <TableCell component="th" scope="row">{row.email}</TableCell>
              <TableCell align="right"><Avatar src={row.profilePicture} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default GroupDetails