
import React from 'react';
import NavBar from '../components/NavBar';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const Detail = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Container className="container">
          <Row className="row">
            <Col md={{ span: 4, offset: 0 }} className="col1">
              <Card className="card">
                <Card.Img variant="top" className="img" src={item.imageUrl} alt="gambar" />
              </Card>
            </Col>
            <Col md={{ span: 8, offset: 0 }} className="col2">
              <h1>{location.state.title}</h1>
              <hr></hr>
              <p>Release Date: {location.state.release}</p>
              <hr></hr>
              <p>Popularity: {location.state.popularity}</p>
              <hr></hr>
              <p>Original Language: {location.state.language}</p>
              <hr></hr>
              <p>Vote Count: {location.state.vote}</p>
              <hr></hr>
              <h5>Overview</h5>
              <p>{location.state.overview}</p>
              <Button variant="dark" className="btn" onClick={(value) => goBack(value)}>
                Back
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Detail;
