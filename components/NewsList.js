import { Card, Button } from 'react-bootstrap';

const NewsList = (props) => {
  return (
    <div className="containerCard">
      <Card className="card">
        <Card.Img variant="top" className="image" src={props.src} />
          <a href="" className="title">
            <Card.Title>{props.title}</Card.Title>
          </a>
      </Card>
    </div>
  );
};

export default NewsList;
