import React from 'react';
import { split } from 'lodash';
import { FormGroup, Label, Input, Col } from 'reactstrap';
const InputDate = ({label, value, onChange}) => (
    <FormGroup row>
        <Label for={label} sm={1.5}>{label}</Label>
        <Col>
          <Input
            type="date"
            name={label}
            id={label}
            placeholder={`Ingrese ${label}`}
            value = {split(value, 'T')[0]}
            onChange={onChange}
          />
        </Col>
      </FormGroup>
);

export default InputDate;
