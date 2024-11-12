import React from 'react';
import { Carousel } from 'react-bootstrap';
import './mainSection.css';

class CarouselComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
        <div className="carousel-custom">
            <Carousel>
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src="https://media-exp1.licdn.com/dms/image/C511BAQEiNYhFD12LDw/company-background_10000/0/1518845380326?e=2159024400&v=beta&t=fR7l_rD25JDftEmo4xT3DvZXFspzPvd73VfCEp1nhH0"
                    alt="First slide"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src="https://media-exp1.licdn.com/dms/image/C511BAQEiNYhFD12LDw/company-background_10000/0/1518845380326?e=2159024400&v=beta&t=fR7l_rD25JDftEmo4xT3DvZXFspzPvd73VfCEp1nhH0"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://media-exp1.licdn.com/dms/image/C511BAQEiNYhFD12LDw/company-background_10000/0/1518845380326?e=2159024400&v=beta&t=fR7l_rD25JDftEmo4xT3DvZXFspzPvd73VfCEp1nhH0"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
        );
    }
}

export default CarouselComponent;