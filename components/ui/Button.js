import React from 'react'
import classes from '../../styles/Button.module.css'

export default function Button({route, text}) {
  return (
    <div className={classes.Button}>
      <p>{text}</p>
      <div className={classes.ButtonBg}></div>
    </div>
  )
}
