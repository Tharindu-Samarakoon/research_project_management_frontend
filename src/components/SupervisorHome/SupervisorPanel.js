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
import Navbar from '../Navbar/Navbar';

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
    
    primary: {
      main: "#061d34",
    },
    secondary: {
      main: "#f5a000",
    },
  },
});

export default function SupervisorPanel() {
  const navigate = useNavigate();

  const moveToPage = () => {
    navigate("/staffManagement");
  };

  return (


    

    <ThemeProvider theme={theme}>

<Navbar/> 
      <div className="container">
        <div className="row g-3 mt-5">
          {/* card 1 */}
          <div className="col-lg-4 col-sm-12">
            <Link to="/group">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src="https://submit.com/wp-content/uploads/2020/07/submit-button.png"
                    alt="Staff management"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Submitted Groups
                    </Typography>

                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </div>



          {/* card 2 */}
          <div className="col-lg-4 col-sm-12">
            <Link to="/coSupervisorG">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src="https://thumbs.dreamstime.com/b/boss-office-businessman-supervisor-worker-boss-office-businessman-supervisor-worker-vector-director-praising-158139652.jpg"
                    // image="/static/images/cards/contemplative-reptile.jpg"
                    alt="student management"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Co-Supervisor selected groups
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

