import React from 'react'
import styles from "./TabResult.module.css"

function TabResult(props) {

    return (
        <div className={styles.ShadowStyle} onClick={() => props.showData()}>
            <div className={styles.TabResult}>
                <span className={styles.Id}>id : {props.id}</span>
                <span className={styles.Title}>title.(0,20) : {props.title.substring(0, 20)}</span>
                <span className={styles.Text}>text.(0,200) : {props.text.substring(0, 200)}</span>
            </div>
        </div>
    )
}

export default TabResult
