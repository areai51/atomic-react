import React from 'react'

import styles from './Avatar.css';


const Avatar=({...props})=>{
return(
<img className={styles.avatar} src={props.picUrl} alt={props.altTag} width={props.size} height={props.size}/>


)
}

export default Avatar;