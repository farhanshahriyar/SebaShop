import React from 'react'
import { Container, Card, Row, Col, Form, Button, Navbar, Offcanvas } from 'react-bootstrap';

const AdminScreen = () => {
    const [show, setShow] = React.useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleToggle = () => setShow(!show);

    return (
        <Container className="mt-3">

            <h2>Dashboard</h2>
        {/* Navbar with Offcanvas */}
        <Button class="btn btn-primary" type="button" onClick={handleShow}>
        More Options
        </Button>

        <Offcanvas show={show} onHide={handleClose} placement="start">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>More Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Button variant="primary" className="mb-2 w-100" block>Upcoming News</Button>
                <Button variant="primary" className="mb-2 w-100" block>Request Products</Button>
                <Button variant="primary" className="mb-2 w-100" block>Movie List</Button>
                <Button variant="primary" className="mb-2 w-100" block>Web Series List</Button>
                <Button variant="primary" className="mb-2 w-100" block>Shortfilms List</Button>
                <Button variant="primary" className="mb-2 w-100" block>Documentory List</Button>
                <Button variant="primary" className="mb-2 w-100" block>Update</Button>
                <Button variant="primary" className="mb-2 w-100" block>Admin Settings</Button>
                <Button variant="primary" className="mb-2 w-100" block>Logout</Button>
            </Offcanvas.Body>
        </Offcanvas>
            <hr />
            {/* Check all information about website */}
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Total Movies</Card.Title>
                            <Card.Text>Details</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Total Series</Card.Title>
                            <Card.Text>Details</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Total Register users</Card.Title>
                            <Card.Text>Details</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <hr />
            
            {/* Checking available movies/series */}
            <h3 className="mt-3">All Movies/Series</h3> 
            <Row>
                <Col md={5}>
                    <Form>
                        <Form.Group controlId="search">
                            <Form.Control type="text" placeholder="Search..." />
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={5}>
                    <Form>
                        <Form.Group controlId="category">
                            <Form.Control as="select">
                                <option>All</option>
                                <option>Movie</option>
                                <option>Web-Series</option>
                                <option>Natok / Shortfilm</option>
                                <option>Documentory</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={2}>
                    <Button className="float-right">Search</Button>
                </Col>
            </Row>
          
            <hr></hr>
            <h3 className="mt-3">Add New Movie/Series</h3>
            <Form>
                <Row>
                    <Col md={6}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group controlId="image">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>

               
                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group> 
                
                <Form.Group controlId="tailer">
                    <Form.Label>Trailer Link</Form.Label>
                    <Form.Control type="text" placeholder="Enter trailer link" />
                </Form.Group>

                <Form.Group controlId="imdb">
                    <Form.Label>IMDB</Form.Label>
                    <Form.Control type="number" placeholder="Enter IMDB Rating" />
                </Form.Group>

                <Form.Group controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select">
                        <option>Action</option>
                        <option>Drama</option>
                        {/* Add more options... */}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="type">
                    <Form.Label>Type</Form.Label>
                    <Form.Control as="select">
                        <option>Movie</option>
                        <option>Web Series</option>
                        <option>Short Film / Natok</option>
                        <option>Documentory</option>
                        {/* Add more options... */}
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group controlId="size">
                    <Form.Label>Size</Form.Label>
                    <Form.Control type="number" placeholder="Enter Movie Size" />
                </Form.Group>

                <Form.Group controlId="quality">
                    <Form.Label>Quality</Form.Label>
                    <Form.Control type="number" placeholder="Enter Movie/Series/Shortfilm/Documentory Quality" />
                </Form.Group>
        
             
                <Form.Group controlId="cast">
                    <Form.Label>Cast</Form.Label>
                    <Form.Control type="text" placeholder="Enter Movie/Series/Shortfilm/Documentory Cast Members Name" />
                </Form.Group>

                <Form.Group controlId="duration">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control type="text" placeholder="Enter Movie/Series/Shortfilm/Documentory Duration" />
                </Form.Group>

                <Form.Group controlId="language">
                    <Form.Label>Language</Form.Label>
                    <Form.Control type="text" placeholder="Enter Movie/Series/Shortfilm/Documentory Language" />
                </Form.Group>

                <Form.Group controlId="subtitle">
                    <Form.Label>Subtitle</Form.Label>
                    <Form.Control type="text" placeholder="Enter Movie/Series/Shortfilm/Documentory Subtitle" />
                </Form.Group>

                <Form.Group controlId="released">
                    <Form.Label>Released</Form.Label>
                    <Form.Control type="text" placeholder="Enter Movie/Series/Shortfilm/Documentory Released" />
                </Form.Group>

                <Form.Group controlId="download">
                    <Form.Label>DownloadLink</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>

                <Form.Group controlId="download">
                    <Form.Label>TorrentLink</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>


                <br></br>
                </Col>
                <Button class="btn btn-lg btn-primary" type="button">Publish</Button>
                </Row>
            </Form>
            <br></br>
        </Container>
    )
}

export default AdminScreen
