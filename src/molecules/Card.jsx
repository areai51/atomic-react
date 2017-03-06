
import React from 'react'

import Button from './Button'
import Rating from './Rating'
import styles from './Card.css'

 const Card = (props) => {
  return (
 <div className={styles.cardContainer}>
{props.cardData.map((card) =>
    <div className={styles.card}>
            <img src={card.image} />
              <h2 children={card.heading} />
              <Rating value={4} />
            <p>{card.text} </p>
            <Button> Add to Cart</Button>
         
        </div>
)}
         </div>
      )
     
}

export default Card

