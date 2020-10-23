import React from 'react';
import map from 'lodash/map'
import { Button, Table } from 'reactstrap';
import {Link} from 'react-router-dom';
import Modal from './Modal';
const Index = ({headers, rows, information, linkTo}) => (
    <Table > 
      <thead>
        <tr>
          {headers && map(headers, header => (
            <th>{header}</th>
          ))}
          {information && <th>Información</th>}
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        
        {rows && map(rows, row => (
          <tr>
            {headers && map(headers, header => 
              <td>{row[header]}</td>
            )}
            {information && (
              <td>
                <Modal
                  information = {information}
                  row = {row}
                  buttonLabel = "Ver"
                />
              </td>
            )}
            <td> <Button tag={Link} to={`${linkTo}/${row.id_operativo}`} >Editar</Button> </td>
          </tr>
        ))}
        
      </tbody>
    </Table>
);

export default Index;
