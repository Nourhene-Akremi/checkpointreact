import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import{Container,Row,Col,Form} from 'react-bootstrap';
function App() {
  return (
   
     <div className='example'>
      <Container>
        <Row>
            <Col xs={{order: 'first' }}>why</Col>
            <Col xs>react</Col>
            <Col xs={{order: 'last' }}>is hard</Col>
        </Row> 
      </Container>
      <div className='form'>
              <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control plaintext readOnly defaultValue="email@example.com" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
        </Form>
        <div/>
      <div/>
    </div>
    </div>
  );
}

export default App;
