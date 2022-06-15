import React from 'react'
import './card.css'

import { Button } from '../button/button'

const Card = ({ color, title, text }) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <h3>{title}</h3>
      <p>{text}</p>
      <Button />
    </div>
  )
}

Card.defaultProps = {
  color: 'lightoracoral',
  title: 'Titulo Card',
  text: 'Card Text'
}

// ACESSANDO AS PROPS COM CLASS
// class Card extends React.Component {
//   render() {
//     return (
//       <div className="card">
//         <h3>{this.props.title}</h3>
//         <p>esse é um texto de card</p>
//       </div>
//     )
//   }
// }

export { Card }
