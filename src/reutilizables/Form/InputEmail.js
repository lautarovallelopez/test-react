import React from 'react';
import { FormGroup, Label, Input, Col } from 'reactstrap';
const InputEmail = ({label, value, onChange}) => (
    <FormGroup row>
        <Label for={label} sm={1.5}>{label}</Label>
        <Col>
          <Input
            type="email"
            name={label}
            id={label}
            placeholder={`Ingrese ${label}`}
            value={value}
            onChange={onChange}
          />
        </Col>
    </FormGroup>
);

export default InputEmail;