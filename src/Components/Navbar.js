import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../Styles/navbar.css";
import logo from "../MD Organics/header logo.jpg";
import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavbarCont(){
   return(
    <Container fluid>
         <Row  className='Container'>
            <Col>
               <div className='Header-img'>
                  <Image src={logo} width={100}/>
               </div>
            </Col>
            <Col sm={8} lg={5}>
               <div className='Header-Links'>
                   <a href='/Home'>Home</a>
                   <a href='/SoapProduct'>Product</a>
                   <a href='/'>FeedBack</a>
               </div>
            </Col>
            
        </Row>

    </Container>
   );
}
export default NavbarCont;