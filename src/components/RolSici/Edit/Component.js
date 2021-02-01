import { reduce } from 'lodash';
import React, {Component} from 'react';
import {Title} from '@reutilizables';
import { Form, Row, Col, Button, Container} from 'reactstrap';
import { InputEmail, InputDate, InputNumber, InputSelect, RegularInput, InputText} from '../../../reutilizables';

class Edit extends Component{
    /*componentDidMount(){
        const {id} = this.props.match.params;
        this.props.fetchOptions();
        if(id){
            this.props.fetchOne(id);
        }
    }
    handleChange(change){
        const {operativoActual} = this.props;
        Object.assign(operativoActual, change)
        this.props.update(operativoActual);
        this.forceUpdate();
    }
    handleClick(){
        this.props.submit();
    }*/
    render(){
        /*const {
            descripcion,
            observacion,
            dominio,
            fecha_llegada_paquete,
            formato_del_archivo,
            total_registros,
            contacto_operativo,
            mail_contacto,
            fecha_inicio_codificacion,
            fecha_fin_codificacion,
            fecha_entrega_operativo,
            id_estado_operativo,
            calidad_operativo,
            nivel_error_operativo
        } = this.props.operativoActual;
        const {estados, formatos} = this.props;
        console.log(estados);*/
        return (
            <Container>
                <Title title='EDICIÓN ROLES SICI'/>
                <Form>
                    <Row form>
                        <Col md='4'>
                            <RegularInput 
                                label='ID'
                            />
                        </Col>
                        <Col md='4'>
                            <RegularInput
                                label='Usuario'
                                
                            />
                        </Col>
                    </Row>
                    <Row form >
                        <Col>
                            <InputSelect
                                label='Rol Usuario'
                            />
                        </Col>
                    </Row>
                    <Row form>
                        <Col sm={6}>
                            <InputText
                                label='Observación'
                            /> 
                        </Col>
                        <Col sm={6}>
                            <InputText
                                label='Descripción'
                            /> 
                        </Col>
                    </Row>   
                    <Row form>
                        <Col sm={12}>
                            <InputText
                                label='Dominio'
                            /> 
                        </Col>
                    </Row>     
                    <Button>
                        Enviar
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Edit;
