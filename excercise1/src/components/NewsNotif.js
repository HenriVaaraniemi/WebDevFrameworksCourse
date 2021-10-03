import React from 'react'
import styles from "./NewsNotif.module.css";

export default function NewsNotif(props) {
    return (
        <div className={styles.flexcontainer}>
            <div className ={ styles.container }>
                <span className ={ styles.header }>{ props.topic }:</span> { props.body }
            </div>
            
            
        </div>
    )
}
