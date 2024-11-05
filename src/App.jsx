import React, { useState } from 'react';
import SearchComponent from './components/SearchComponent';
import DetailComponent from './components/DetailComponent';
import { Container, Row, Col, Card } from 'react-bootstrap';

function App() {
  const [meals, setMeals] = useState([]); // State för att lagra måltider från API
  const [selectedMeal, setSelectedMeal] = useState(null); // Denna state håller koll på vilken käk användaren har valt och gör så att du kan ändra det valet. 

  // Funktion för att söka efter måltider baserat på en söksträng
  const handleSearch = async (query) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`); // Anropar API med söksträng
    const data = await response.json(); // Konverterar API-svar till JSON
    setMeals(data.meals || []); // Uppdaterar state med resultat från API, eller tom array om inga resultat
  };

  // Funktion för att välja en måltid för detaljerad visning 
  const handleSelectMeal = (meal) => {
    setSelectedMeal(meal); // Uppdaterar state med den valda måltiden
  };


  return (
    <Container>
      <h1 className="my-4 text-center">Frays Måltider</h1>
      <SearchComponent onSearch={handleSearch} />
      {/* // här har jag använt mig av bootstrap hjälp klasser // */}
      <Row className="my-4">
        <Col md={8}>
          <Row>
            {meals.map((meal) => (
              <Col key={meal.idMeal} md={4} className="mb-4">
                <Card onClick={() => handleSelectMeal(meal)}>
                  <Card.Img variant="top" src={meal.strMealThumb} />
                  <Card.Body>
                    <Card.Title>{meal.strMeal}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={4}>
          <DetailComponent meal={selectedMeal} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

