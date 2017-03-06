import React, {Component} from 'react';
import {Header, Footer, CardContainer} from './organisms';
import {Card, Button, Panel} from './molecules'


import styles from'./App.css'
// import logo from './logo.svg';


const footerLinks=[
  {'title':'Home','url':'http://www.yahoo.com'},
  {'title':'About Us','url':'http://www.google.com'}

]



class App extends Component {
  render() {
    return (
      <div className={styles.App}>

        <Header/>


<h2>Cards</h2>
<CardContainer />


<h2>Panel</h2>
<Panel heading='This is Panel header'> 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet elementum dolor sed elementum. Quisque aliquam libero erat, at tempus quam malesuada in. Aliquam libero lectus, bibendum at magna sodales, dictum cursus mauris. Vestibulum blandit massa at orci finibus euismod. Nam convallis, purus et bibendum sodales, purus nisi euismod nunc, et tristique sapien lacus et metus. Aliquam elementum posuere arcu, at tempus ante sodales sed. Ut cursus, purus non rutrum eleifend, nulla mauris faucibus tellus, in auctor purus ex quis tellus. Aliquam erat volutpat. Donec et velit varius, porta ante ac, egestas nulla. Curabitur eu tellus ex. Donec at placerat elit. Aliquam erat volutpat. Fusce tempor quam et urna faucibus lobortis.

</Panel>


 <Footer currentYear='2017' links={footerLinks}/>

      </div>
    );
  }
}

export default App;
