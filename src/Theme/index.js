import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});
// import palette from './palette'
// import typography from './typography'

// const theme = createMuiTheme({
//   // palette,
//   // typography,
//   zIndex: {
//     appBar: 1200,
//     drawer: 1100,
//   },
// })

export default theme
