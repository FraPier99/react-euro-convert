

import React from "react";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from 'react-bootstrap/Image';



import Form from 'react-bootstrap/Form';


const Valutes = ({ title, types, nome, onChange, value,selectedCurrency,val }) => {
  return (
    <div className="valuta-container">
      <Row>
        <Col><p>{title}</p></Col>
      </Row>
      <div className="row-valuta">
        <Row>
          <Col>
            <Image
              style={{ width: '95px', height: '90px' }}
              src={val}
              roundedCircle
            />
          </Col>
          <Col>
            <Form.Group controlId="currencySelect">
              <Form.Select aria-label="Seleziona valuta"
              
              name={nome === "amount" ? "selectedCurrency" : "selectedConvCurrency"} // Nome dinamico per lo stato
              value={selectedCurrency}

              
              onChange={onChange} 
              
              >
                {types.map((item, key) => (
                  <option key={key} value={item}>{item}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Control
              onChange={onChange}
              name={nome}
              value={value}
              type="number"
              placeholder="importo.."
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Valutes;
