import './cards.css'

import { Card } from '../card/card'
import { Button } from '../button/button'

const cardTitles = ['Titulo card 1', 'Titulo card 2', 'Titulo card 3']
const cardText = [
  'esse é um texto do card 1',
  'esse é um texto do card 2',
  'esse é um texto do card 3'
]
const cardBackgroundColor = ['orange', 'green']

const Cards = () => {
  return (
    <div className="cards-container">
      <h2>Meus Cards</h2>

      <div className="cards">
        {cardTitles.map((cardTitle, index) => {
          return (
            <Card
              key={index}
              title={cardTitle}
              text={cardText[index].toUpperCase()}
              color={cardBackgroundColor[index]}
            />
          )
        })}

        <Card
          color={'blue'}
          title={'Titulo card 4'}
          text={'esse é um texto do card 4'}
        />
      </div>
    </div>
  )
}

export { Cards }
