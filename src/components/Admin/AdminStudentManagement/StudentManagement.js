import React from "react";
import Button from "@mui/material/Button";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";

const style = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
};

const StudentManagement = () => {
  return (
    <div>
      <div className="row mt-3">
        <div className="d-flex justify-content-center">
          <h3>
            <u>Student Management</u>
          </h3>
        </div>
      </div>

      {/* <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab variant="extended" color="primary" aria-label="add" sx={style}>
          <AddIcon />
          Add Member
        </Fab>
      </Box> */}
      <div className="container-lg mt-5">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">...</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">DOB</th>
              <th scope="col">Email</th>
              <th scope="col">Profile picture</th>
              <th scope="col">Group name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>1999.09.11</td>
              <td>kasun@gmail.com</td>
              <td>image.jpg</td>
              <td>name or number</td>
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

export default StudentManagement;
