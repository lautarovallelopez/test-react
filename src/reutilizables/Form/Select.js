import React from 'react';
import {map, transform} from 'lodash'
import { FormGroup, Label, Input, Col } from 'reactstrap';

const InputSelect = ({id, label, options, onChange, selectedOne, optionValue, optionLabel}) => (
    <FormGroup row>
        <Label for={label}>{label}:</Label>
        <Input
          placeholder="sm"
          bsSize="sm"
          type="select"
          name={label}
          id={id}
          onChange={onChange}
        >
          <option selected value="">
            {`Elija ${label}`}
          </option>
          {options && map(options, singleOption =>(
              <option
                selected={selectedOne===singleOption[optionValue]}
                value={singleOption[optionValue]}
              >
                {singleOption[optionLabel]}
              </option>
            )
          )}
        </Input>
    </FormGroup>
);

export default InputSelect;
