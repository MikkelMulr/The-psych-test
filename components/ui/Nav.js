import React from 'react'
import classes from '../../styles/Nav.module.css'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className={classes.Nav}>
      <Link href='/'>Home</Link>
      <Link href='/'>About</Link>
      <Link href='/'>Learn More</Link>
      <div className={classes.NavLine}></div>
    </div>
  )
}
