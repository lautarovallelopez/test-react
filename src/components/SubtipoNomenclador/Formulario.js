import React from 'react';
import {Form, Col, Row} from 'reactstrap';
import {
    RegularInput,
    InputText,
    CheckBox,
    PrimaryButton
} from '@reutilizables'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faBook,
    faComment,
    faFileDownload
} from '@fortawesome/free-solid-svg-icons';
const Example = (props) => {
  return (
      <Form>
        <Row form>
            <Col md='4'>
                <RegularInput 
                    label='id tipo'
                />
            </Col>
            <Col md={{ size: 4, offset: 4 }}>
                <FontAwesomeIcon icon={faFileDownload} className='fa-3x icon'/>
                <FontAwesomeIcon icon={faComment} className='fa-3x icon'/>
                <FontAwesomeIcon icon={faBook} className='fa-3x icon'/>
            </Col>
        </Row>
        <Row form>
            <Col md='4'>
                <RegularInput 
                    label='id subtipo'
                />
            </Col>
        </Row>
        <Row form>
            <Col md='6'>
                <InputText 
                    label='Descripción'
                />
            </Col>
            <Col md='6'>
                <InputText 
                    label='Observación'
                />
            </Col>
        </Row>
        <Row form>
            <Col md='6'>
                <InputText 
                    label='dominio'
                />
            </Col>
        </Row>
        <Row form>
            <Col md='6' class='check-container'>
                <CheckBox
                    label='Supervisado'
                />
            </Col>
            <Col md='6'>
                <PrimaryButton label='GUARDAR'/>
            </Col>
            
        </Row>
    </Form>  
  );
}

export default Example;