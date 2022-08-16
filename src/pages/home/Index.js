import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import CarouselDark from '../../components/slider/Carousel';
import Paragraph from '../../components/text/Paragraph';
import Cards from '../../components/cards/index/Cards';

export const Home = () => {
  return (
    <div>
        <CarouselDark/>
        <Paragraph/>
        <div className="container conCards flex-wrap">
          <Cards/>
        </div>
    </div>
  )
}

export default Home;