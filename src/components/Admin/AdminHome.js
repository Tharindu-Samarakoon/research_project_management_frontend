// import { useState } from "react";
// import { Link } from "@mui/material";
// import { MenuItems } from './MenuItems/MenuItems'
import "./AdminHome.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
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

export default function AdminHome() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src="https://staticg.sportskeeda.com/editor/2022/01/74d3c-16426630332228-1920.jpg"
          // image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
