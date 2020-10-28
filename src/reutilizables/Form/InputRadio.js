import React from 'react';
import { FormGroup, Label, Input, Col } from 'reactstrap';
import { map } from 'lodash';
const InputRadio = ({title, name, options, onChange}) => (
    <FormGroup tag="fieldset">
        <Label sm={1.5}>{title}</Label>
        <Col>
          {map(options, option => (
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name={name}
                  value = {option.value}
                  onChange={onChange}
                />
                {option.label}
              </Label>
            </FormGroup>
          ))}
        </Col>
      </FormGroup>
);

export default InputRadio;
