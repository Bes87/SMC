import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './messageBanner.css';

class MessageBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div className={this.props.version}>
                <Container>
                    {
                        this.props.link ? 
                        <Link className="banner-title" to={this.props.link}>{this.props.message}</Link>
                        : <h1 className="banner-title">{this.props.message}</h1>
                    }
                   
                </Container>
            </div>
        );
    }
}

export default MessageBanner;