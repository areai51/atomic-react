import React from 'react';
import styles from './Footer.css'



const Footer=({...props})=> {
return(
    <div className={styles.footer}>

<ul>
{props.links.map((link) =>
  <li><a key={link.name} href={link.url}>{link.title}</a></li>
)}
</ul>

<span> © Copyright {props.currentYear} mySite.com </span>
    </div>
)


}

export default Footer;
