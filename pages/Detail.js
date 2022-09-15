import React from 'react';
import NavBar from '../components/navbar';
import { useRouter } from 'next/router';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const Detail = () => {
  const router = useRouter();

  return (
    <>
      <NavBar />
      <div>
        <Container className="container">
          <Row className="row">
            <Col md={{ span: 4, offset: 0 }} className="col1">
              <Card className="card">
                <Card.Img variant="top" className="img" src={router.query.imageUrl} alt={router.query.title} />
              </Card>
            </Col>
            <Col md={{ span: 8, offset: 0 }} className="col2">
              <h1>{router.query.title}</h1>
              <hr></hr>
              <p>{router.query.content}</p>
              <hr></hr>
              <p>Date : {router.query.date}</p>
              <hr></hr>
              <p>Author : {router.query.author}</p>
              <hr></hr>
              <p>Time : {router.query.time}</p>
            </Col>
          </Row>
        </Container>

      </div>
    </>
  );
};

export default Detail;
