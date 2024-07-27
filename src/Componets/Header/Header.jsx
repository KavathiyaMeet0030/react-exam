import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import profile from '../../assets/img/profile img.avif'


function Header() {
  return (
   <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" className='fs-3 fw-bold'> Movie List</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='fs-4'>Home</Nav.Link>
            <Nav.Link href="#action2" className='fs-4'>Popular Movie</Nav.Link>
            <Nav.Link href="#"  className='fs-4'>
               Movies Serch
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Login</Button>
          </Form>
 
          <div>
             <img src={profile} alt="profile" width={50} height={50}  className='bg-body'/>
          </div>
           
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Header;
