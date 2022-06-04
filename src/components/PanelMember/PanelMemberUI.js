import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, createTheme, Divider, ThemeProvider } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const theme2 = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#061d34",
    },
    secondary: {
      main: "#f5a000",
    },
  },
});

export default function AdminHome() {
  const navigate = useNavigate();

  const moveToPage = () => {
    navigate("/staffManagement");
  };

  return (
    <ThemeProvider theme={theme2}>
      <div className="container">
      <div className="container mt-2">
      <Divider />
      <Typography variant='h4' component='div' gutterBottom >Panel Member</Typography>
      <Divider />

        <div className="row g-3 mt-5">
          {/* card 1 */}
          <div className="col-lg-4 col-sm-12">
            <Link to="/TopicView">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src="https://www.invoicera.com/blog/wp-content/uploads/2019/01/online-staff-management-software.png"
                    alt="Topic List"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Topic List
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      view and accept or reject topics that accepted by the supervisor
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </div>

          {/* card 2 */}
          <div className="col-lg-4 col-sm-12">
            <Link to="/MarkingSchemeList">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src="https://blog.advids.co/wp-content/uploads//2017/08/student.png"
                    // image="/static/images/cards/contemplative-reptile.jpg"
                    alt="MarkingScheme List"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Marking Scheme List
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Add or Update Feedback, view and Download Marking Schemes 
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </div>

        </div>         

        </div>    
      </div>
    </ThemeProvider>
  );
}
