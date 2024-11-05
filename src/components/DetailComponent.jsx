import React from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';

function DetailComponent ({ meal }) {
  if (!meal) {
    return <div>Sök på en valfri måltid</div>;
  }

  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h2>{meal.strMeal}</h2>
          <Image src={meal.strMealThumb} alt={meal.strMeal} fluid />
          <p className="mt-3">{meal.strInstructions}</p>
          <h5>Ingredentser:</h5>
          <ListGroup>
            {Object.keys(meal)
              .filter(key => key.startsWith('strIngredient') && meal[key])
              .map(key => (
                <ListGroup.Item key={key}>{meal[key]}</ListGroup.Item>
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}



export default DetailComponent;
