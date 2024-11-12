import React from 'react';
import MessageBanner from '../components/messageBanner';
import './pagesCustomStyle.css';
import appContent from '../config-content';
import ArticleComponent from '../components/articleComponent';

class FirmPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
        <div className="firmPage-section">
            <MessageBanner version="ms-bg-image-banner" message={appContent.firmPage.mainBanner.title} />
            <ArticleComponent content={appContent.firmPage.pageContent} />
        </div>
        );
    }
}

export default FirmPage;