import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    textTransform: 'none',
  },
}))

interface ButtonProps {
  text: string
  icon: React.ReactNode
  color: 'primary' | 'secondary'
  onClick: () => void
}

function IconButton({ text, icon, color, onClick }: ButtonProps): JSX.Element {
  const classes = useStyles()

  return (
    <Button
      variant="outlined"
      color={color}
      className={classes.button}
      startIcon={icon}
      onClick={onClick}>
      {text}
    </Button>
  )
}

export default IconButton
