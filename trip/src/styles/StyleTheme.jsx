import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// Define your custom typography
const customTheme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 500,
      letterSpacing: '-0.00833em',
    },
    // Add more styles as needed
  },
});

// // Wrap your app with the theme provider
// function App() {
//   return (
//     <ThemeProvider theme={customTypography}>
//       <Typography variant="h1">Hello World!</Typography>
//     </ThemeProvider>
//   );
// }

// export default App;
