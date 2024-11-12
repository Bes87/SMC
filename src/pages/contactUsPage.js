import React from 'react';
import './pagesCustomStyle.css';
import appContent from '../config-content';
import MessageBanner from '../components/messageBanner';
import { Container, Row, Col } from 'react-bootstrap';
import FirmInfoComponent from '../components/firmInfoComponent';
import MapComponent from '../components/mapComponent';
import FormComponent from '../components/formComponent';

class ContactUsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
    }

    render() {
        return (
        <div className="contactUs-section">
            <MessageBanner version="ms-bg-image-banner" message={appContent.contactsPage.mainBanner.title} />
            <Container className="contacts-mid-section">
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <FirmInfoComponent infoSection={appContent.contactsPage.infoSection}/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <MapComponent />
                    </Col>
                    <Col xs={12} md={4}>
                        <FormComponent />
                    </Col>
                </Row>
            </Container>
            <MessageBanner version="ms-bg-no-image-banner-dark" message="Arrivederci" />
        </div>
        );
    }
}

export default ContactUsPage;