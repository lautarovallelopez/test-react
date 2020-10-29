import React from 'react';
import {FormGroup, Label, Col, Input} from 'reactstrap';

const InputFile = ({name, onChange})=>(
    <FormGroup row>
        <Label for="exampleFile" sm={2}>File</Label>
        <Col sm={10}>
          <Input
            type="file"
            name={name}
            id="exampleFile"
            onChange = {onChange}
        />
        </Col>
    </FormGroup>
)

export default InputFile;