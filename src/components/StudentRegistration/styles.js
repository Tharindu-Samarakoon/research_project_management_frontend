import { createTheme, makeStyles } from '@material-ui/core';
// import RegBackground from '../../images/StudentReg.jpg'

export const themeOptions = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#061d34',
    },
    secondary: {
      main: '#f5a000',
    },
  },}
);


const useStyles = makeStyles({

    // container: {
    //   backgroundImage: `url(${RegBackground})`
    // }

    profilePic: {
      backgroundColor: '#061d34',
    }
  
}); 

export default useStyles;