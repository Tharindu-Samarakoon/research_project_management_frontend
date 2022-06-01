import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate } from "react-router-dom";

const style = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
};

const StaffManagement = () => {
  return (
    <div>
      <div className="row mt-3">
        <div className="d-flex justify-content-center">
          <h3>
            <u>Staff Management</u>
          </h3>
        </div>
      </div>

      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Link to="/addStaffMember">
          <Fab variant="extended" color="primary" aria-label="add" sx={style}>
            <AddIcon />
            Add Member
          </Fab>
        </Link>
      </Box>
      <div className="container-lg mt-5">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">...</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email Address</th>
              <th scope="col">Working Campus</th>
              <th scope="col">Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>saman.a@my.sliit.lk</td>
              <td>Malabe</td>
              <td>Panel member</td>
              <td>
                <Button
                  variant="outlined"
                  startIcon={<UpdateIcon />}
                  color="success"
                >
                  Update
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  color="error"
                >
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffManagement;
