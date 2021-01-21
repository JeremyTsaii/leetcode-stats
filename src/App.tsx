import React from 'react'
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles'
import Content from './components/Content'
import './App.css'

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff1744',
    },
    secondary: {
      main: '#673ab7',
    },
    // Background colors
    info: {
      main: '#121212',
      light: '#191b21',
    },
  },
})

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(20),
  },
}))

function App(): JSX.Element {
  const classes = useStyles()

  return (
    <ThemeProvider theme={mainTheme}>
      <div className={classes.root}>
        <Content />
      </div>
    </ThemeProvider>
  )
}

export default App
