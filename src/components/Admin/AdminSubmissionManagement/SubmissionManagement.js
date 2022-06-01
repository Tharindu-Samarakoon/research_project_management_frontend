import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { Box } from "@mui/material";
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

const SubmissionManagement = () => {
  return (
    <div>
      <div className="row mt-3">
        <div className="d-flex justify-content-center">
          <h3>
            <u>Submission Management</u>
          </h3>
        </div>
      </div>

      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab variant="extended" color="primary" aria-label="add" sx={style}>
          <AddIcon />
          Add Type
        </Fab>
      </Box>
      <div className="container-lg mt-5">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">...</th>
              <th scope="col">Submission Type</th>
              <th scope="col">Deadline</th>
              <th scope="col">Uploaded Date</th>
              <th scope="col">Templates and Documents</th>
              <th scope="col">Marking Schemes</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>SRS</td>
              <td>3rd week</td>
              <td>2022.02.02</td>
              <td>
                {/* <FormControl select size="small" sx={{ m: 0, width: 200 }}>
                  <InputLabel id="demo-multiple-name-label">Name</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl> */}
                SRS.docx
              </td>
              <td>Test1.pdf</td>
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

export default SubmissionManagement;
