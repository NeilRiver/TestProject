import React from 'react'
import styles from "./TabResult.module.css"

function TabResult(props) {
   
    return (
        <div className={styles.TabResult}>
            <p>id : {props.id}</p>
            <p>title : {}</p>
        </div>
    )
}

export default TabResult
