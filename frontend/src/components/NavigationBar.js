import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas'
import OffcanvasHeader from 'react-bootstrap/esm/OffcanvasHeader';
import Accordion from 'react-bootstrap/Accordion'



function NavigationBar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () =>setShow(true)
  return (
    <Navbar variant='light' bg='light' expand="lg" fluid>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='lead'>Home</Nav.Link>
            <Nav.Link href="#action2" className='lead'>Shop</Nav.Link>
            <Nav.Link href="#action2" className='lead'>Cart</Nav.Link>
            <Nav.Link href="#action2" className='lead'>About</Nav.Link>
            <NavDropdown className='lead'title="Account" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant='dark' onClick={handleShow}>
            Search
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <OffcanvasHeader closeButton>
              <Offcanvas.Title>
                All Categories
              </Offcanvas.Title>
            </OffcanvasHeader>
            <Offcanvas.Body>
              <Accordion defaultActiveKey=''>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>Flowers</Accordion.Header>
                  <Accordion.Body>
                  <Nav defaultActiveKey="/home" className="flex-column">
                  <Nav.Link href="/home">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
                  </Nav>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>Cakes</Accordion.Header>
                  <Accordion.Body>
                  <Nav defaultActiveKey="/home" className="flex-column">
                  <Nav.Link href="/home">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
                  </Nav>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header>Plants</Accordion.Header>
                  <Accordion.Body>
                  <Nav defaultActiveKey="/home" className="flex-column">
                  <Nav.Link href="/home">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
                  </Nav>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                  <Accordion.Header>Balloons</Accordion.Header>
                  <Accordion.Body>
                  <Nav defaultActiveKey="/home" className="flex-column">
                  <Nav.Link href="/home">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
                  </Nav>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                  <Accordion.Header>Bundles</Accordion.Header>
                  <Accordion.Body>
                  <Nav defaultActiveKey="/home" className="flex-column">
                  <Nav.Link href="/home">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
                  </Nav>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='5'>
                  <Accordion.Header>Treats</Accordion.Header>
                  <Accordion.Body>
                  <Nav defaultActiveKey="/home" className="flex-column">
                  <Nav.Link href="/home">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
                  </Nav>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Form className="d-flex mt-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            </Offcanvas.Body>
          </Offcanvas>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;