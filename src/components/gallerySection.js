import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../gallery";
import { Container } from "react-bootstrap";
import './gallerySection.css';
import appContent from '../config-content';
import { Link } from 'react-router-dom';

function GallerySection(props) {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
  
    return (
      <div className={props.page === "Main" ? "gallery-section" : "gallery-section gallery-page"}>
        <Container fluid={props.page === "Main" ? false : true}>
            <h3 className="gallery-section-title text-start"><Link className="gallery-section-title text-start" to="/SMC/gallery">{appContent.homePage.ourWorkSection.title}</Link></h3>
            <Gallery photos={props.page === "Main" ? photos.slice(0,7) : photos} onClick={openLightbox} />
            <ModalGateway>
            {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                    }))}
                />
                </Modal>
            ) : null}
            </ModalGateway>
        </Container>
      </div>
    );
  }

export default GallerySection;