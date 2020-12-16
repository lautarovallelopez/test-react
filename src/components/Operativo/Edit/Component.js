import { reduce } from 'lodash';
import React, {Component} from 'react';
import { Form, Row, Col, Button, Container} from 'reactstrap';
import { InputEmail, InputDate, InputNumber, InputSelect, RegularInput, InputText} from '../../../reutilizables';

class Edit extends Component{
    componentDidMount(){
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
    }
    render(){
        const {
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
        console.log(estados);
        return (
            <Container>
                <h1>Edición Operativo</h1>
                <Form>
                    <Row form>
                        <Col md='4'>
                            <RegularInput 
                                label='descripcion'
                                value={descripcion}
                                onChange={({target:{value}}) => this.handleChange({descripcion:value})}
                            />
                        </Col>
                        <Col md='4'>
                            <RegularInput
                                label='observacion'
                                value={observacion}
                                onChange={({target:{value}}) => this.handleChange({observacion:value})}
                            />
                        </Col>
                        <Col ms='4'>
                            <RegularInput
                                label='dominio'
                                value={dominio}
                                onChange={({target:{value}}) => this.handleChange({dominio:value})}
                            />
                        </Col>
                    </Row>
                    <Row form >
                        <Col>
                            <InputDate
                                label='fecha_llegada_paquete'
                                value={fecha_llegada_paquete}
                                onChange={({target:{value}}) => this.handleChange({fecha_llegada_paquete:value})}
                            />
                        </Col>
                        <Col>
                            <InputSelect
                                label='formato_del_archivo'
                                values={formatos}
                                selectedOne={formato_del_archivo}
                                onChange={({target:{value}}) => this.handleChange({formato_del_archivo:value})}
                            />
                        </Col>
                        <Col>
                            <InputNumber
                                label='total_registros'
                                value={total_registros}
                                onChange={({target:{value}}) => this.handleChange({total_registros:value})}
                            />
                        </Col>
                    </Row>
                    <Row form>
                        <Col>
                            <RegularInput
                                label='contacto_operativo'
                                value={contacto_operativo}
                                onChange={({target:{value}}) => this.handleChange({contacto_operativo:value})}
                            />
                        </Col>
                        <Col>
                            <InputEmail
                                label='mail_contacto'
                                value={mail_contacto}
                                onChange={({target:{value}}) => this.handleChange({mail_contacto:value})}
                            />
                        </Col>
                        <Col>
                            <InputDate
                                label='fecha_inicio_codificacion'
                                value={fecha_inicio_codificacion}
                                onChange={({target:{value}}) => this.handleChange({fecha_inicio_codificacion:value})}
                            />
                        </Col>
                    </Row>
                    <Row form>
                        <Col>
                            <InputDate
                                label='fecha_fin_codificacion'
                                value={fecha_fin_codificacion}
                                onChange={({target:{value}}) => this.handleChange({fecha_fin_codificacion:value})}
                            />
                        </Col>
                        <Col>
                            <InputDate
                                label='fecha_entrega_operativo'
                                value={fecha_entrega_operativo}
                                onChange={({target:{value}}) => this.handleChange({fecha_entrega_operativo:value})}
                            />
                        </Col>
                        <Col>
                            <InputSelect
                                label='id_estado_operativo'
                                values={estados}
                                selectedOne={id_estado_operativo}
                                onChange={({target:{value}}) => this.handleChange({id_estado_operativo:value})}
                            />
                        </Col>
                    </Row>
                    <Row form>
                        <Col sm={4}>
                            <InputNumber
                                label='calidad_operativo'
                                value={calidad_operativo}
                                onChange={({target:{value}}) => this.handleChange({calidad_operativo:value})}
                            />
                        </Col>
                        <Col sm={4}>
                            <InputNumber
                                label='nivel_error_operativo'
                                value={nivel_error_operativo}
                                onChange={({target:{value}}) => this.handleChange({nivel_error_operativo:value})}
                            />
                        </Col>
                    </Row>
                    <Row form>
                        <Col sm={8}>
                            <InputText
                                label='observacion'
                                value={observacion}
                                onChange={({target:{value}}) => this.handleChange({observacion:value})}
                            /> 
                        </Col>
                           
                    </Row>      
                    <Button
                        onClick={()=>this.handleClick()}
                    >
                        Enviar
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Edit;
