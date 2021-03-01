import Slider from "react-slick";

const Carousel = ({count, children}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6
  }

  return (
    <Slider {...settings}>{children}</Slider>
  )
}

export default Carousel