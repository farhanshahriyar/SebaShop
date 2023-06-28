import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container,Nav,Navbar,NavDropdown, Form, FormControl, Button } from "react-bootstrap";

const Headers = () => {
  return (
    <>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand>Movie Network</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 
          <LinkContainer to='/'>
            <Nav.Link><i class="fa-sharp fa-solid fa-film"></i> Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/movie'>
            <Nav.Link><i class="fa-sharp fa-solid fa-film"></i> Movie</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/web-series'>
            <Nav.Link><i class="fa-sharp fa-solid fa-film"></i> Web Series</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/up-coming'>
            <Nav.Link><i class="fa-sharp fa-solid fa-film"></i> Upcoming</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/request'>
            <Nav.Link><i class="fa-sharp fa-solid fa-film"></i> Request</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/faq'>
            <Nav.Link><i class="fa-sharp fa-solid fa-film"></i> FAQ</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/login'>
            <Nav.Link><i className='fas fa-user'></i> Sign In</Nav.Link>
          </LinkContainer>
          {/* <Form inline>
          <FormControl type="text" placeholder="Search movies..." className="mr-sm-2 w-100" />
        </Form> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Headers
