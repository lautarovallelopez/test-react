import React, {Component} from 'react';
import { Form, Row, Col, Button, Container} from 'reactstrap';
import { InputNumber, InputSelect, RegularInput, InputRadio} from '@reutilizables';

class Edit extends Component{
    componentDidMount(){
        const {id_operativo, id_estructura} = this.props.match.params;
        if(id_estructura){
            this.props.fetchOne(id_estructura);
        }else{
           this.handleChange({id_operativo}) 
        }
        this.props.fetchOptions();
    }
    handleChange(updates){
        const {campoActual} = this.props;
        Object.assign(campoActual, updates)
        this.props.update(campoActual);
        this.forceUpdate();
    }
    handleClick(){
        this.props.submit();
    }
    render(){
        const {
            nombre_original,
            id_nombre_campo_entrada,
            dominio,
            es_parte_del_id,
            tipo_de_dato,
            tamanio_dato,
            tiene_decimales,
            decimales,
            posicion_inicial,
            posicion_final,
            hay_conversion_dato,
            observacion
        } = this.props.campoActual;
        const {entradasCampos} = this.props;
        return (
            <Container>
                <Row>
                    <Col sm={{offset:3, size:6}} >
                        <Form>
                            <Row>
                                <Col sm={{offset:0.5, size:11}}>
                                    <RegularInput
                                        label = 'nombre_original'
                                        value = {nombre_original}
                                        onChange={({target:{value}}) => this.handleChange({nombre_original:value})}
                                    />
                                    <InputSelect
                                        label = 'id_nombre_campo_entrada'
                                        values = {entradasCampos}
                                        selectedOne = {id_nombre_campo_entrada}
                                        onChange={({target:{value}}) => this.handleChange({id_nombre_campo_entrada:value})}
                                    />
                                    <RegularInput
                                        label = 'dominio'
                                        value = {dominio}
                                        onChange={({target:{value}}) => this.handleChange({dominio:value})}
                                    />
                                    <InputRadio
                                        title = 'es_parte_del_id'
                                        name = 'es_parte_del_id'
                                        options = {[
                                            {
                                                label:'Si',
                                                value: 1
                                            },
                                            {
                                                label:'No',
                                                value:0
                                            }
                                        ]}
                                        onChange = {({target:{value}})=>this.handleChange({es_parte_del_id:new Boolean(Number(value))})}
                                    />
                                    <RegularInput
                                        label = 'tipo_de_dato'
                                        value = {tipo_de_dato}
                                        onChange={({target:{value}}) => this.handleChange({tipo_de_dato:value})}
                                    />
                                    <InputNumber
                                        label = 'tamanio_dato'
                                        value = {tamanio_dato}
                                        onChange={({target:{value}}) => this.handleChange({tamanio_dato:value})}
                                    />
                                    <InputRadio
                                        title = 'tiene_decimales'
                                        name = 'tiene_decimales'
                                        options = {[
                                            {
                                                label:'Si',
                                                value: 1
                                            },
                                            {
                                                label:'No',
                                                value:0
                                            }
                                        ]}
                                        onChange = {({target:{value}})=>this.handleChange({tiene_decimales:new Boolean(Number(value))})}
                                    />
                                    <InputNumber
                                        label = 'decimales'
                                        value = {decimales}
                                        onChange={({target:{value}}) => this.handleChange({decimales:value})}
                                    />
                                    <InputNumber
                                        label = 'posicion_inicial'
                                        value = {posicion_inicial}
                                        onChange={({target:{value}}) => this.handleChange({posicion_inicial:value})}
                                    />
                                    <InputNumber
                                        label = 'posicion_final'
                                        value = {posicion_final}
                                        onChange={({target:{value}}) => this.handleChange({posicion_final:value})}
                                    />
                                    <InputRadio
                                        title = 'hay_conversion_dato'
                                        name = 'hay_conversion_dato'
                                        options = {[
                                            {
                                                label:'Si',
                                                value: 1
                                            },
                                            {
                                                label:'No',
                                                value:0
                                            }
                                        ]}
                                        onChange = {({target:{value}})=>this.handleChange({hay_conversion_dato:new Boolean(Number(value))})}
                                    />
                                    <RegularInput
                                        label = 'observacion'
                                        value = {observacion}
                                        onChange={({target:{value}}) => this.handleChange({observacion:value})}
                                    />
                                    <Button
                                        onClick={()=>this.handleClick()}
                                    >
                                        Enviar
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Edit;
