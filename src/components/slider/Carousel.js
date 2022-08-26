import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../../assets/images/Img1.jpg';
import Img2 from '../../assets/images/Img2.jpg';
import Img3 from '../../assets/images/Img3.jpg';

function CarouselDark() {
  return (
      <div className="container">
    <Carousel className='shadow'>
      <Carousel.Item>
        <img
          className="d-flex w-100 wrap"
            src={Img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
            className="d-block w-100"
            src={Img2}
            alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
            className="d-block w-100"
            src={Img3}
            alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
  );
}

export default CarouselDark;