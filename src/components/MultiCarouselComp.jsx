import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import deals from "../constants/deals";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function createCar(imgName){
    return <img className="w-[270px]" src={imgName} alt=""/>
}

function MultiCarouselComp() {
  return (
    <>
      <Carousel className="bg-white flex items-center h-[281px] " autoPlay={true} autoPlaySpeed={1000} infinite={true}  responsive={responsive}>
          {deals.map(createCar)}
      </Carousel>
    </>
  )
}

export default MultiCarouselComp;