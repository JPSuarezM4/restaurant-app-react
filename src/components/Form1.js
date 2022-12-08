import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Form1() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nuevo restaurante</Form.Label>
        <Form.Control type="text" placeholder="Nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Control type="text" placeholder="Descripción" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Control type="text" placeholder="Dirección" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Control type="text" placeholder="URL Img Restaurante" />
      </Form.Group>

      <Button variant="outline-secondary" type="submit">
        Guardar
      </Button>
    </Form>
  );
}


export default Form1