import React from 'react';
import { FormGroup, Label, Input, Col } from 'reactstrap';
const InputText = ({label, value}) => (
    <FormGroup row>
        <Label for={label}>{label}:</Label>
        <Input
            bsSize="sm"
            type="textarea"
            name={label}
            id={label}
            value={value}
        />
    </FormGroup>
);

export default InputText;