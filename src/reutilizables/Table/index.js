import React from 'react';
import map from 'lodash/map'
import { Button, Table, ButtonGroup } from 'reactstrap';
import {Link} from 'react-router-dom';
import Modal from './Modal';
const Index = ({headers, rows, information, links}) => (
    <Table > 
      <thead>
        <tr>
          {headers && map(headers, header => (
            <th>{header}</th>
          ))}
          {information && <th>Información</th>}
          {links && <th>Acciones</th>}
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
            {links &&
              <td>
                <ButtonGroup>
                  {map(links, link=>(
                    <Button tag={Link} to={`${link.url}/${row[link.id]}`} >
                      {link.label}
                    </Button>
                  ))}
                </ButtonGroup>
                
                
              </td>}
          </tr>
        ))}
        
      </tbody>
    </Table>
);

export default Index;
