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
                <Divider color="#edcd1f" />
                <MessageBanner message={appContent.homePage.infoBanner.title} version="ms-bg-no-image-banner"/>
                <Divider color="#edcd1f" />
                <GallerySection page="Main" />
                <MessageBanner message={appContent.homePage.contactBanner.title} link="/contactUs" version="ms-bg-image-banner"/>
            </Container>
        </div>
        );
    }
}

export default MainSection;