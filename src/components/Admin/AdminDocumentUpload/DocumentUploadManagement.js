import React from "react";
import Button from "@mui/material/Button";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import { useTheme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { Box } from "@mui/material";

const style = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const DocumentUploadManagement = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div>
      <div className="row mt-3">
        <div className="d-flex justify-content-center">
          <h3>
            <u>Documents and Templates Management</u>
          </h3>
        </div>
      </div>

      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab variant="extended" color="primary" aria-label="add" sx={style}>
          <AddIcon />
          Add File
        </Fab>
      </Box>
      <div className="container-lg mt-5">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">...</th>
              <th scope="col">Type</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Document</td>
              <td>SRS.docx</td>
              <td>2022.02.03</td>
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
                  startIcon={<DownloadIcon />}
                  color="primary"
                >
                  Download
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

export default DocumentUploadManagement;
