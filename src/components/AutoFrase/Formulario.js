import React from 'react';
import {Form, Col, Row} from 'reactstrap';
import {
    RegularInput,
    InputText,
    CheckBox,
    PrimaryButton,
    InputSelect,
    InputDate,
    IconDocument,
    IconComment
} from '@reutilizables'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faComment,
    faFileDownload
} from '@fortawesome/free-solid-svg-icons';
const Example = (props) => {
  return (
    <Form>
        <Row form>
            <Col md='4'>
                <RegularInput
                    label='Id AutoFrase'
                />
            </Col>
            <Col md={{ size: 4, offset:4}}>
                <FontAwesomeIcon icon={faFileDownload} className='fa-3x icon'/>
                <IconComment />
                <IconDocument />
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
            <Col md='12'>
                <InputText
                    label='Frase'
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
            <Col md='6'>
                <CheckBox
                    label='FRASE RETROALIMENTA'
                />
            </Col>
            <Col md='6'>
                <InputDate
                    label='FECHA DE RETROALIMENTACION'
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