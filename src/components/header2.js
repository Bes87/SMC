import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            status: "top"
        };
    }

    componentDidMount() {
        console.log("inner width"+ window.innerWidth);
        this.listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 120) {
              if (this.state.status !== "amir") {
                this.setState({ status: "amir" });
              }
            } else {
              if (this.state.status !== "top") {
                this.setState({ status: "top" });
            }
          }
       });
    }

    render() {
        return (
            <Navbar className="custom-navbar" fixed="top" collapseOnSelect expand="lg" bg={(this.props.pathname === "/" && this.state.status === "top") ? "trasparent": "dark"} variant="dark">
                <Container >
                <Navbar.Brand className="custom-brand-name" href="/" style={{color: "#edcd1f"}}>{this.props.firmName}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/firmPage">Chi Siamo</Nav.Link>
                        <Nav.Link as={Link} to="/gallery">I Nostri Lavori</Nav.Link>
                        <Nav.Link as={Link} to="/contactUs">Contatti</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;