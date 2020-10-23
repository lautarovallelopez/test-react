import React, {Component} from 'react';
import { Form, Row, Col, Button } from 'reactstrap';
import { InputEmail, InputDate, InputNumber, InputSelect, RegularInput} from '../../../reutilizables';

class Edit extends Component{
    handleChange(change){
        const {operativoActual} = this.props;
        Object.assign(operativoActual, change)
        this.props.update(operativoActual);
        this.forceUpdate();
    }
    handleClick(){
        
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
            nivel_error_operativo,
            fecha_alta
        } = this.props.operativoActual;
        const {estados, formatos} = this.props;

        return (
            <Form sm={9}>
                <Row>
                    <Col sm={9}>
                        <RegularInput 
                            label='descripcion'
                            value={descripcion}
                            onChange={({target:{value}}) => this.handleChange({descripcion:value})}
                        />
                        <RegularInput
                            label='observacion'
                            value={observacion}
                            onChange={({target:{value}}) => this.handleChange({observacion:value})}
                        />
                        <RegularInput
                            label='dominio'
                            value={dominio}
                            onChange={({target:{value}}) => this.handleChange({dominio:value})}
                        />
                        <InputDate
                            label='fecha_llegada_paquete'
                            value={fecha_llegada_paquete}
                            onChange={({target:{value}}) => this.handleChange({fecha_llegada_paquete:value})}
                        />
                        <InputSelect
                            label='formato_del_archivo'
                            values={formatos}
                            selected={formato_del_archivo}
                            onChange={({target:{value}}) => this.handleChange({formato_del_archivo:value})}
                        />
                        <InputNumber
                            label='total_registros'
                            value={total_registros}
                            onChange={({target:{value}}) => this.handleChange({total_registros:value})}
                        />
                        <RegularInput
                            label='contacto_operativo'
                            value={contacto_operativo}
                            onChange={({target:{value}}) => this.handleChange({contacto_operativo:value})}
                        />
                        <InputEmail
                            label='mail_contacto'
                            value={mail_contacto}
                            onChange={({target:{value}}) => this.handleChange({mail_contacto:value})}
                        />
                        <InputDate
                            label='fecha_inicio_codificacion'
                            value={fecha_inicio_codificacion}
                            onChange={({target:{value}}) => this.handleChange({fecha_inicio_codificacion:value})}
                        />
                        <InputDate
                            label='fecha_fin_codificacion'
                            value={fecha_fin_codificacion}
                            onChange={({target:{value}}) => this.handleChange({fecha_fin_codificacion:value})}
                        />
                        <InputDate
                            label='fecha_entrega_operativo'
                            value={fecha_entrega_operativo}
                            onChange={({target:{value}}) => this.handleChange({fecha_entrega_operativo:value})}
                        />
                        <InputSelect
                            label='id_estado_operativo'
                            values={estados}
                            selectedOne={id_estado_operativo}
                            onChange={({target:{value}}) => this.handleChange({id_estado_operativo:value})}
                        />
                        <InputNumber
                            label='calidad_operativo'
                            value={calidad_operativo}
                            onChange={({target:{value}}) => this.handleChange({calidad_operativo:value})}
                        />
                        <InputNumber
                            label='nivel_error_operativo'
                            value={nivel_error_operativo}
                            onChange={({target:{value}}) => this.handleChange({nivel_error_operativo:value})}
                        />
                        <InputDate
                            label='fecha_alta'
                            value={fecha_alta}
                            onChange={({target:{value}}) => this.handleChange({fecha_alta:value})}
                        />
                        <Button>Enviar</Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default Edit;