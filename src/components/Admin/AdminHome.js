// import { useState } from "react";
// import { Link } from "@mui/material";
// import { MenuItems } from './MenuItems/MenuItems'
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, createTheme, ThemeProvider } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

// import avaRed from "../../images/avaRed.png";
// import avaBlue from "../../images/avaBlue.png";
// import avaPink from "../../images/avaPink.png";
// import avaGray from "../../images/avaGray.png";
// import avaGreen from "../../images/avaGreen.png";
// import avaPurple from "../../images/avaPurple.png";

// const AdminHome = () => {
//   const [state, setState] = useState(false);
//   const handleClick = () => {
//     setState({ clicked: !state.clicked });
//   };
//   const imageOnClickHandler = (e) => {
//     const name = e.target.name;
//     console.log(name);
//   };
//   return (
//     <div>
//       <nav className='NavbarItems'>
//         <h1 className="navbar-logo"><img className='fab fa-react' src={ava} height='30'></img> Research Project </h1>
//         <div className="menu-icon" onClick={handleClick}>
//           <i className={state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
//         </div>
//         <ul className={state.clicked ? 'nav-menu active' : 'nav-menu'}>
//           {MenuItems.map((item, index) => {
//             return(
//               <li key={index} className='navlist'><a className={item.cName} >{item.title}</a></li>
//             )
//           })}
//           <a href="#" className="btn btn-secondary">Sign up</a>
//         </ul>
//       </nav>
//       <img
//         alt="bla"
//         onClick={imageOnClickHandler}
//         name="1"
//         className="redAvatar"
//         src={avaRed}
//         height="150"
//         width="150"
//       ></img>
//       <table>
//         <tbody>
//           <th>
//             <Link to="/#">
//               <img src={avaRed} alt="movie image" className="redAvatar" />
//             </Link>
//           </th>
//         </tbody>
//       </table>
//     </div>
//   );
// };
// export default AdminHome;

const theme = createTheme({
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
    <ThemeProvider theme={theme}>
      <div className="container">
        <div className="row g-3 mt-5">
          {/* card 1 */}
          <div className="col-lg-4 col-sm-12">
            <Link to="/staffManagement">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src="https://www.invoicera.com/blog/wp-content/uploads/2019/01/online-staff-management-software.png"
                    alt="Staff management"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Staff Management
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      Update, Delete and view staff details.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </div>

          {/* card 2 */}
          <div className="col-lg-4 col-sm-12">
            <Link to="/studentManagement">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src="https://blog.advids.co/wp-content/uploads//2017/08/student.png"
                    // image="/static/images/cards/contemplative-reptile.jpg"
                    alt="student management"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Student Management
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Delete, view and update student details
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </div>

          {/* card 3 */}
          <div className="col-lg-4 col-sm-12">
            <Link to="/submissionManagement">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src="https://assets-global.website-files.com/6141b0efd8e313f1168ba8cc/626bf9b2096598270845af8d_rimsys-5.jpg"
                    // image="/static/images/cards/contemplative-reptile.jpg"
                    alt="submission types"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Submission Management
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Add, Update, Delete and view submission types.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </div>
        </div>

        {/* card 4 */}
        <div className="row g-3 mt-3">
          <div className="col-lg-4 col-sm-12">
          <Link to="/documentManagement">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ZzK1gTunRvaAYzTAoPF3q9ShQtotadusQw&usqp=CAU"
                  // image="/static/images/cards/contemplative-reptile.jpg"
                  alt="template management"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Templates and Documents
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Upload, view and delete items.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Link>
          </div>

          {/* card 5 */}
          <div className="col-lg-4 col-sm-12">
          <Link to="/studentGroupManagement">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  src="https://peerbits-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/right-structure-for-your-project-main1.jpg"
                  // image="/static/images/cards/contemplative-reptile.jpg"
                  alt="student group"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Student Group Management
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Allocate panel members to student groups.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Link>
          </div>

          {/* card 6 */}
          <div className="col-lg-4 col-sm-12">
          <Link to="/markingSchemeManagement">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKHMHh8nHom9LdVkEVd-_dievXAc8bIfHXGg&usqp=CAU"
                  // image="/static/images/cards/contemplative-reptile.jpg"
                  alt="marking schemes"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Marking Schemes
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Add, delete and view marking schemes.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Link>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
