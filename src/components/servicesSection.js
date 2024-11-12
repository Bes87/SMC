import React from 'react';
import { Container, CardGroup } from 'react-bootstrap';
import './servicesSection.css';
import ServicesCard from './serviceCard';

class ServicesSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        const services = this.props.services;
        return (
        <div className="services-section">
            <Container>
                <h2 className="services-title text-start">{this.props.title}</h2>
                <CardGroup >
                    { services.map((item, index) => {
                        return <ServicesCard key={index} item={item}/>
                    })}
                </CardGroup>
            </Container>
        </div>
        );
    }
}

export default ServicesSection;