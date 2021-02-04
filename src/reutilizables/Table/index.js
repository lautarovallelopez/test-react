import React from 'react';
import {map, pick, forEach} from 'lodash'
import { Button, Table, ButtonGroup } from 'reactstrap';
import {Link} from 'react-router-dom';
import Modal from './Modal';
import {faPen, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import queryString from 'query-string';
const toQuery = attributes=>queryString.stringify(attributes);
const toParams = (attribute, obj)=>{
  let params='';
  forEach(attribute, function(value) {
    params += `/${obj[value]}`
  });
  return params;
}
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
                    <Button
                      tag={Link}
                      color="info"
                      to = {`${acciones.editar.to}${toParams(acciones.editar.attributes, row)}`}
                      title="editar"
                    >
                      <FontAwesomeIcon icon={faPen}/>
                    </Button>
                    <Button
                      color="danger" 
                      title="eliminar" 
                      onClick={() =>acciones.eliminar.onClick(pick(row, acciones.eliminar.attributes))}
                    >
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
