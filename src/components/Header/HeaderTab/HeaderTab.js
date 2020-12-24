import React from 'react'
import styles from './HeaderTab.module.css';

function HeaderTab(props) {
    return (
        <div className={styles.Tab}>
            {props.title}
        </div>
    )
}

export default HeaderTab
