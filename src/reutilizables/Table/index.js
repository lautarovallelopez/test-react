import React from 'react';
import map from 'lodash/map'
import { Button, Table, ButtonGroup, UncontrolledTooltip } from 'reactstrap';
import {Link} from 'react-router-dom';
import Modal from './Modal';
import {faPen, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
const Index = ({headers, rows, information, links, acciones}) => (
    <Table size="lg" className='table-responsive'>
      <thead>
        <tr>
          {headers && map(headers, header => (
            <th>{header}</th>
          ))}
          {information && <th>Información</th>}
          {links && <th>Links</th>}
          {acciones && <th>Acciones</th>}
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
                        <FontAwesomeIcon icon={faPen}/>
                      </Button>
                  ))}
                </ButtonGroup>
              </td>
            }
            {acciones &&
              <td>
                <ButtonGroup>
                    <Button tag={Link} color="info" title="editar">
                      <FontAwesomeIcon icon={faPen}/>
                    </Button>
                    <Button tag={Link} color="danger" title="eliminar">
                      <FontAwesomeIcon icon={faTrashAlt}/>
                    </Button>
                </ButtonGroup>
              </td>
            }
          </tr>
        ))}
        
      </tbody>
    </Table>
);

export default Index;
