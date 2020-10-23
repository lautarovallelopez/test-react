import React from 'react';
import map from 'lodash/map'
import { Table } from 'reactstrap';
import Modal from './Modal';
const Index = ({headers, rows, information}) => (
    <Table > 
      <thead>
        <tr>
          {headers && map(headers, header => (
            <th>{header}</th>
          ))}
          {information && <th>Información</th>}
          <th>Subir Estrucutra</th>
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
            <td><input type="file"/></td>
          </tr>
        ))}
        
      </tbody>
    </Table>
);

export default Index;
