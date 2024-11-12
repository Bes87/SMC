import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
        <div>
            <Navbar fixed="bottom" bg="light" variant="light">
            <Container>
                <Navbar.Text className="footer-text"> 
                    {this.props.copyright}
                </Navbar.Text>
            </Container>
            </Navbar>
        </div>
        );
    }
}

export default Footer;