import { createTheme, makeStyles } from "@material-ui/core";

const Colors = {
    primary: '#0000',
};

export const theme = createTheme({
    palette: {
        primary: {
            main: '#061d34',
        }
    },
});

export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#061d34',
      },
    },
  });

export const useStyles = makeStyles({

  appbar: {
    backgroundColor: '#061d34'
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  navLink: {
    color: 'white',
    
  },
  logo_style: {
    paddingRight: 8,
  }

  
}); 