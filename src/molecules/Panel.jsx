import React from 'react'

import styles from './Panel.css';


const Panel=({children, ...props})=>{
return(
    <div className={styles.panel}>
    <h3 className={styles.panelHeading}>{props.heading}</h3>
    <div className={styles.panelBody}> {children} </div>
    </div>
)
}

export default Panel;