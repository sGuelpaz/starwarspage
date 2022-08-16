import React from 'react'
import Card from './Card';

import Img1 from '../../../assets/images/Mandalorian.jpg';
import Img2 from '../../../assets/images/DarthMaul.jpg';
import Img3 from '../../../assets/images/ObiWan.jpg';

const cards = [
{
  id: 1,
  title: 'Card I',
  image: Img1,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius blandit luctus. Crasdf ssaas lectus nisi, commodo in nisi at, luctus scelerisque dui. Nunc elementum justo nibh, at mattis turpis elementum nec. Sed turpis neque, porta a mollis vitae, accumsan eget.'
},
{
  id: 2,
  title: "Card II",
  image: Img2,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis porta dolor. Proin vel justo eu turpis mollis tincidunt eget id est. Nulla blandit tellus orci, tristique aliquet lorem vehicula quis. Phasellus pretium venenatis nisi. Praesent gravida, nisi pulvinar ultricies."
},
{
  id: 3,
  title: 'Card III',
  image: Img3,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla est elit, non viverra diam scelerisque a. Donec lacus ipsum, imperdiet vel tortor faucibus, ultrices finibus lorem. Nam non hendrerit ante. Vestibulum ante ipsum primis in faucibus orci luctus et.'
}
]
  
function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({id,title,image,text})=>(
          <div className="col-md-4" key={id}>
            <Card title={title} image={image} text={text} />
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Cards;