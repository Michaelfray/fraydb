import React, { useState } from 'react';   {/* Importerar React och useState hooken från React-biblioteket */}
import { Form, Button, Container, Row, Col } from 'react-bootstrap';   {/* Importerar nödvändiga komponenter från react-bootstrap */}

function SearchComponent({ onSearch }) {   {/* Definierar en funktionell komponent som tar emot en onSearch-prop */}
  const [query, setQuery] = useState('');   {/* Använder useState för att skapa en state-variabel query och dess setter-funktion setQuery */}

  const handleSearch = (e) => {  {/*  Definierar en funktion som hanterar formulärets submit-händelse*/}
    e.preventDefault();  {/* Förhindrar standardbeteendet för formuläret (som att ladda om sidan)*/}
    onSearch(query);  {/*  Anropar onSearch-funktionen med det aktuella värdet av query*/}
  };

  return (
    <Container className="my-4"> {/* Lägger till ett container-element med en liten marginal i toppen */}
      <Row>  {/*  Skapar en rad för Bootstrap grid-systemet */}
        <Col>  {/*  Lägger till en kolumn som automatiskt fyller tillgängligt utrymme */}
          <Form onSubmit={handleSearch}>  {/*  Skapar ett formulär och binder handleSearch-funktionen till submit-händelsen */}
            <Form.Group controlId="formSearch">  {/* Skapar en form-grupp med ett unikt ID för sökfältet */}
              <Form.Control
                type="text"  
                value={query}  
                onChange={(e) => setQuery(e.target.value)}  
                placeholder="Sök här"  
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">  {/*  Lägger till en knapp för att skicka formuläret, med lite marginal på toppen */}
              Sök  {/*  Text på knappen */}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchComponent;  {/*  Exporterar komponenten så att den kan användas i andra filer */}

