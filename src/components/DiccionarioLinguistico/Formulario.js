import React from 'react';
import {Form, Col, Row} from 'reactstrap';
import {
    RegularInput,
    InputText,
    CheckBox,
    PrimaryButton,
    InputSelect
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
            <Col md='8'>
                <InputSelect
                    label='Descripción del tipo de diccionario'
                />
            </Col>
            <Col md={{ size: 4}}>
                <FontAwesomeIcon icon={faFileDownload} className='fa-3x icon'/>
                <FontAwesomeIcon icon={faComment} className='fa-3x icon'/>
                <FontAwesomeIcon icon={faBook} className='fa-3x icon'/>
            </Col>
        </Row>
        <Row form>
            <Col md='2'>
                <RegularInput
                    label='Id Variable'
                />
            </Col>
            <Col md='3'>
                <RegularInput
                    label='Abreviatura'
                />
            </Col>
            <Col md='7'>
                <InputSelect
                    label='Variable Estadística'
                />
            </Col>
        </Row>
        <Row form>
            <Col md='6'>
                <RegularInput
                    label='Palabra/Frase Origen'
                />
            </Col>
            <Col md='6'>
                <RegularInput
                    label='Palabra/Frase Destino'
                />
            </Col>
        </Row>
        <Row form>
            <Col md='6'>
                <InputText
                    label='Observación'
                />
            </Col>
            <Col md='6'>
                <InputText
                    label='Dominio'
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