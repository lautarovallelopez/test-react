import React from 'react';
import { FormGroup, Label, Input, Col } from 'reactstrap';
const RegularInput = ({label, value, onChange}) => (
    <FormGroup row>
        <Label for={label} sm={1.5}>{label}</Label>
        <Col>
          <Input
            type="text"
            name={label}
            id={label}
            value={value}
            placeholder={`Ingresá ${label}`}
            onChange={onChange}
          />
        </Col>
    </FormGroup>
);

export default RegularInput;
