import React, {Component} from 'react';

import {Avatar} from '../molecules'
import styles from './Header.css'
class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        
<Avatar className={styles.avatar} {...this.props} picUrl='https://avatars1.githubusercontent.com/u/357862'  altTag='Vinci Rufus'/>
<h1 className={styles.logo}>Atomic React</h1>

</div>
    )
  }
}

Header.defaultProps = {
    size: '48'
}
    export default Header;