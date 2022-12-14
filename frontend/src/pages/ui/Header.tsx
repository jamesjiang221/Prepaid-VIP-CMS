import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
    return (
        <Navbar className='header' bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Prepaid and Times Card CMS</Navbar.Brand>
                <div className="navbuttons">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <NavDropdown title="VIP" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/prepaid-card">Prepaid Card</NavDropdown.Item>
                                <NavDropdown.Item href="/times-card">Times Card</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/client-info">Client Info</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
}