import React from 'react'
import styles from './Header.module.css';
import HeaderTab from './HeaderTab/HeaderTab';
import {Link} from "react-router-dom";

function Header(props) {
  console.log("Header ->",props.tabInfo)
  return (
    <div className={styles.Header}>
      {
        props.tabInfo.length === 0
        ? <h3>Header</h3>
        : props.tabInfo.map((x,i) =>
        <Link style={{
        textDecoration: 'none', 
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        color: 'white'}} 
        to={x.id}
        key={i}> 
        <HeaderTab  title={x.title} id={x.id} /> </Link>
      )}
    </div>
  )
}

export default Header
