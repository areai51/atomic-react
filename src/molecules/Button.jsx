import React from "react";
import styles from './Button.css'


const Button = (props)=>{
    return(

      <button type="button" onClick={props.onClick} className={styles.primary}>
        {props.children}
      </button>

    )
}


export default Button;
