import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import student1 from "../img/student1.jpg"
import student2 from "../img/student2.jpg"

function CarouselBox () {
    return(
        <Carousel>
            <Carousel.Item>
                <img 
                    className="d-block w-120"
                    src={student1} 
                    alt="English" 
                />
                <Carousel.Caption>
                    <h3>The best theme for the</h3>
                    <h3>Education</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={student2} 
                    alt="English" 
                />
                <Carousel.Caption>
                    <h3>Minimum theory more</h3>
                    <h3>Practice</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselBox