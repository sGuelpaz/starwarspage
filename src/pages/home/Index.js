import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import CarouselDark from '../../components/slider/Carousel';
import Paragraph from '../../components/text/Paragraph';


export const Home = () => {
  return (
    <div>
        <CarouselDark/>
        <Paragraph/>
    </div>
  )
}

export default Home;