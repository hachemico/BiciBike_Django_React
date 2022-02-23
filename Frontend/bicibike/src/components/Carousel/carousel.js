import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import FirstSlide from '../../assets/BICIBIKE.png'
import SecondSlide from '../../assets/BICIBIKE_ONTINYENT.png'
import ThirdSlide from '../../assets/BICIBIKE_GREEN.png'

export default function ShowCarousel(){
    return (
        <> 
        <div className="container">
            <div className="row p-3">
                <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src={FirstSlide}    //800x400img
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={SecondSlide} //800x400img
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={ThirdSlide} //800x400img
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
            </div>
        </div>
        </>
    )
}