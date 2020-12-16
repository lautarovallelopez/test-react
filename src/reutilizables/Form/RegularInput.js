import React from 'react';
import { FormGroup, Label, Input, Col } from 'reactstrap';
const RegularInput = ({label, value, onChange}) => (
    <FormGroup row>
        <Label for={label}>{label}:</Label>
        <Input
          bsSize="sm"
          type="text"
          name={label}
          id={label}
          value={value}
          placeholder={`Ingresá ${label}`}
          onChange={onChange}
        />
    </FormGroup>
);

export default RegularInput;
