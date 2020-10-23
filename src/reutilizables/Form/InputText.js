import React from 'react';
import { FormGroup, Label, Input, Col } from 'reactstrap';
const InputText = ({label, value}) => (
    <FormGroup row>
        <Label for={label} sm={1.5}>{label}</Label>
        <Col>
            <Input
                type="textarea"
                name={label}
                id={label}
                value={value}
            />
        </Col>
    </FormGroup>
);

export default InputText;