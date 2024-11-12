import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './articleComponent.css';

class ArticleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div className="custom-article">
                <Container>
                    <Row>
                        <Col>
                            <div className="article-body">
                                <h1 className="article-title">{this.props.content.title}</h1>
                                <p className="article-content">{this.props.content.content}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ArticleComponent;