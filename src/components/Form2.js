import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Form2() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>buscar restaurante</Form.Label>
        <Form.Control type="text" placeholder="Nombre" />
      </Form.Group>

      <Button variant="outline-secondary" type="submit">
        buscar
      </Button>
    </Form>
  );
}


export default Form2