import React from 'react';
import './pagesCustomStyle.css';
import appContent from '../config-content';
import GallerySection from '../components/gallerySection';

class GalleryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
        <div className="galleryPage-section">
             <GallerySection page="Gallery" services={appContent.homePage.servicesSection.services} />
        </div>
        );
    }
}

export default GalleryPage;