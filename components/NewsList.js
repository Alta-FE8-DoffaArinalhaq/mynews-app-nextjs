import { Card, Button } from 'react-bootstrap';

const NewsList = (props) => {
  return (
    <div className="containerCard">
      <Card className="cardnl">
        <Card.Img variant="top" className="image" src={props.src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Button variant="primary" onClick={props.clickDetail}>
            Detail
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsList;
