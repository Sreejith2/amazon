import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import hero from "../constants/hero";

function createCar(imgName){
    return <div>
        <img className=" h-96 " src={imgName} alt=""/>
    </div>
}
export default function CarouselComp(){
        return (
            <Carousel autoPlay={true} dynamicHeight={true} infiniteLoop={true} showThumbs={false} >
                {hero.map(createCar)}
            </Carousel>
        );
    }