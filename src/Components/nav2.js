import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import mg from "../MD Organics/header logo.jpg";
import "../Styles/sample.css";
import { Button } from 'react-bootstrap';
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='sample'>
        <Navbar.Brand href="#home"><img src={mg} width={70}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='toogel'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="DropMenu">
            <Nav.Link href="/" className='one'>Home</Nav.Link>
            {/* <Nav.Link href="SoapProduct/" className='one'>Product</Nav.Link> */}
            <Nav.Link href="/feedback" className='one'>FeedBack</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown" className='DrpDwn'>
              <NavDropdown.Item href="/SoapProduct">Soap Product</NavDropdown.Item>
              <NavDropdown.Item href="/CreamProduct">
                FaceCream Product
              </NavDropdown.Item>
              <NavDropdown.Item href="/OilProduct">Oils Product</NavDropdown.Item>
              <NavDropdown.Divider />

            </NavDropdown>

            <Button type='success' href='HTTPS://wa.me/919597497929'>Orders</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;