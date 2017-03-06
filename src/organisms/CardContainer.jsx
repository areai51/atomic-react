import React, {Component} from 'react';

import {Card} from '../molecules'
import styles from './CardContainer.css'



//  const cards = Array.from({ length: 3 }, (c) => card)
  //const primary = /^\#/.test(colors.primary) ? colors.primary.replace('#', '') : '#666'
  const primary = '#ff6600'
  const Data = [
      {
    image: `http://placehold.it/256x192/${primary}/fff`,
    heading: "Men's Jeans",
    text: "An index card consists of card stock cut to a standard size, used for recording and storing small amounts of discrete data. It was invented by Carl Linnaeus, around 1760."
  },
        {
    image: `http://placehold.it/256x192/${primary}/fff`,
    heading: "Men's Formal Pants",
    text: "An index card consists of card stock cut to a standard size, used for recording and storing small amounts of discrete data. It was invented by Carl Linnaeus, around 1760."
  },

          {
    image: `http://placehold.it/256x192/${primary}/fff`,
    heading: "Men's Formal Pants",
    text: "An index card consists of card stock cut to a standard size, used for recording and storing small amounts of discrete data. It was invented by Carl Linnaeus, around 1760."
  }
  
  ]


class CardContainer extends Component {
  render() {
     
    return (
     
<Card cardData={Data}/>

    )
  }
}

export default CardContainer;