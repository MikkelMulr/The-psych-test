import classes from '../../styles/Layout.module.css'
import Nav from './Nav'

export default function Layout({children}) {
  return (
    <div className={classes.Layout}>
      <Nav />
      {children}
    </div>
  )
}
