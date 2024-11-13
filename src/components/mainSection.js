import React from 'react';
import { Container} from 'react-bootstrap';
import Banner from './banner';
import Divider from './divider';
import './mainSection.css';
import MessageBanner from './messageBanner';
import ServicesSection from './servicesSection';
import GallerySection from './gallerySection';
import appContent from '../config-content';

class MainSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
        <div className="main-section">
            <Container fluid>
                <Banner content={appContent.homePage.mainBanner}/>
                <ServicesSection title={appContent.homePage.servicesSection.title} services={appContent.homePage.servicesSection.services}/>
                <Divider color="#b92727" />
                <MessageBanner message={appContent.homePage.infoBanner.title} version="ms-bg-no-image-banner"/>
                <Divider color="#b92727" />
                <GallerySection page="Main" />
                <Divider color="#b92727" />
                <MessageBanner message={appContent.homePage.contactBanner.title} link="/SMC/contactUs" version="ms-bg-no-image-banner"/>
                <Divider color="#b92727" />
            </Container>
        </div>
        );
    }
}

export default MainSection;