import React from 'react';
import { Container } from 'react-bootstrap';
import './banner.css';

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div className="custom-banner bg-image-banner">
                <Container>
                    <h1 className="banner-title">{this.props.content.title}</h1>
                    <h4 className="banner-content">{this.props.content.subtitle}</h4>
                </Container>
            </div>
        );
    }
}

export default Banner;