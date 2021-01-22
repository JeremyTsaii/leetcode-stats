import React, { useState, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, TextField, MenuItem, Typography } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import BubbleChartIcon from '@material-ui/icons/BubbleChart'
import ImageIcon from '@material-ui/icons/Image'
import BorderColorIcon from '@material-ui/icons/BorderColor'
import IconButton from './IconButton'
import { ThemeType, defaultTheme, themes } from '../static/themes'
import getStatsReq from '../utils/getStats'

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: 'auto',
    backgroundColor: theme.palette.info.light,
    height: theme.spacing(70),
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: theme.spacing(5),
  },
  colSection: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
  rowSection: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
  },
  textFieldLabel: {
    color: theme.palette.primary.main,
  },
  textInput: {
    color: 'white',
  },
}))

function Content(): JSX.Element {
  const classes = useStyles()

  // Username
  const nameRef = useRef('')

  // Theme
  const [theme, setTheme] = useState<ThemeType>(defaultTheme)

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = (event.target as unknown) as ThemeType
    setTheme(target)
  }

  // Action buttons
  const [generated, setGenerated] = useState(false)
  const [imgCopied, setImgCopied] = useState(false)
  const [mdCopied, setMdcopied] = useState(false)

  // onClick function for git button
  const gitOnClick = () => {
    window.open(
      'https://github.com/JeremyTsaii/leetcode-stats',
      '_blank',
      'noopener, noreferrer',
    )
  }

  // onClick function for generate button
  const genOnClick = () => {
    setGenerated(true)
    getStatsReq()
  }

  // onClick function for copy image button
  const imgCopyOnClick = () => {
    setImgCopied(true)
  }

  // onClick function for copy markdwn button
  const mdCopyOnClick = () => {
    setMdcopied(true)
  }

  return (
    <Grid item>
      <Paper elevation={12} className={classes.paper}>
        <div className={classes.colSection}>
          <Typography
            color="secondary"
            align="center"
            variant="h2"
            className={classes.text}>
            LeetCode Stats
          </Typography>
          <IconButton
            text="GitHub"
            icon={<GitHubIcon />}
            color="secondary"
            onClick={gitOnClick}
          />
        </div>
        <div className={classes.rowSection}>
          <TextField
            fullWidth
            autoComplete="off"
            label="Username"
            placeholder="Username"
            inputRef={nameRef}
            InputLabelProps={{
              shrink: true,
              className: classes.textFieldLabel,
            }}
            InputProps={{
              className: classes.textInput,
            }}
          />
          <TextField
            fullWidth
            select
            label="Theme"
            value={theme.value}
            onChange={handleThemeChange}
            InputLabelProps={{
              className: classes.textFieldLabel,
            }}
            InputProps={{
              className: classes.textInput,
            }}>
            {themes.map((themeX) => (
              <MenuItem key={themeX.value} value={themeX.value}>
                {themeX.value}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className={classes.rowSection}>
          <IconButton
            text={generated ? 'Successfully Generated' : 'Generate'}
            icon={<BubbleChartIcon />}
            color="primary"
            onClick={genOnClick}
          />
        </div>
        {generated && (
          <div className={classes.rowSection}>
            <IconButton
              text={imgCopied ? 'Copied' : 'Copy Image URL'}
              icon={<ImageIcon />}
              color="primary"
              onClick={imgCopyOnClick}
            />
            <IconButton
              text={mdCopied ? 'Copied' : 'Copy Markdown'}
              icon={<BorderColorIcon />}
              color="primary"
              onClick={mdCopyOnClick}
            />
          </div>
        )}
      </Paper>
    </Grid>
  )
}

export default Content
