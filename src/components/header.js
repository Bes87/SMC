import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import iconname from '../SM-name.png';
import { Image } from 'react-bootstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            status: "top",
            expanded: false
        };
    }

    componentDidMount() {
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

    setExpanded() {
        if (window.innerWidth <=991) {
            this.setState({ expanded: !this.state.expanded });
        }
    }

    render() {
        return (
            <Navbar className="custom-navbar" expanded={this.state.expanded} fixed="top" collapseOnSelect expand="lg" bg={(this.props.pathname === "/" && this.state.status === "top" && this.state.expanded === false) ? "trasparent": "dark"} variant="dark" >
                <Container >
                {/* <Navbar.Brand className="custom-brand-name" href="/" style={{color: "#edcd1f"}}>{this.props.firmName}</Navbar.Brand> */}
                <Navbar.Brand className="custom-brand-name" href="/" style={{color: "#edcd1f"}}>
                    <Image src={iconname} className="custom-firmname-img" fluid/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => this.setExpanded(!this.state.expanded)}/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" onClick={() => this.setExpanded(false)}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/firmPage" onClick={() => this.setExpanded(false)}>Chi Siamo</Nav.Link>
                        <Nav.Link as={Link} to="/gallery" onClick={() => this.setExpanded(false)}>I Nostri Lavori</Nav.Link>
                        <Nav.Link as={Link} to="/contactUs" onClick={() => this.setExpanded(false)}>Contatti</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;