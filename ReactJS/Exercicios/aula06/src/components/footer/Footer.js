import React from 'react'
import Menu from '../header/Menu'
import style from './Footer.module.css'

function Footer() {
  return (
    <footer className={style.footerPage}>
        <small>Copyright: VEM SER DBC</small>
        <Menu />
    </footer>
  )
}

export default Footer