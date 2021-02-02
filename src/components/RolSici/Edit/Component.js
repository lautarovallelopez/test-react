import React, {Component} from 'react';
import {Title} from '@reutilizables';
import { Form, Row, Col, Button, Container} from 'reactstrap';
import { Select, InputNumber, InputText} from '../../../reutilizables';
import PropTypes from 'prop-types';
class Edit extends Component{
    componentDidMount(){
        const {id} = this.props.match.params;
        
    }
    /*
    handleClick(){
        this.props.submit();
    }*/
    handleChange(e){
        const changes = {[e.target.id]: e.target.value}
        const {rolActual} = this.props;
        Object.assign(rolActual, changes)
        this.props.update(rolActual);
        console.log(rolActual)
        this.forceUpdate();
    }
    render(){
        const {
            ID_USUARIO,
            NOMBRE,
            ID_ROL_USUARIO,
            DESCRIPCION,
            DOMINIO,
            OBSERVACION,
        } = this.props.rolActual;
        return (
            <Container>
                <Title title='EDICIÓN ROLES SICI'/>
                <Form>
                    <Row form>
                        <Col md='4'>
                            <InputNumber
                                id='ID_USUARIO'
                                label='ID'
                                value={ID_USUARIO}
                                onChange={(e)=>this.handleChange(e)}
                            />
                        </Col>
                        <Col md='4'>
                            <Select
                                id='ID_USUARIO'
                                label='Usuario'
                                options={[{nombre:'lautaro', id:'1'}, {nombre:'gustavo', id:'2'}]}
                                onChange={(e)=>this.handleChange(e)}
                                selectedOne={ID_USUARIO}
                                optionValue='id'
                                optionLabel='nombre'
                            />
                        </Col>
                    </Row>
                    <Row form >
                        <Col>
                            <Select
                                id='ID_ROL_USUARIO'
                                label='Rol Usuario'
                                options={[{nombre:'lautaro', id:'lvalle'}, {nombre:'gustavo', id:'galbornoz'}]}
                                onChange={(e)=>this.handleChange(e)}
                                selectedOne=''
                                optionValue='id'
                                optionLabel='nombre'
                            />
                        </Col>
                    </Row>
                    <Row form>
                        <Col sm={6}>
                            <InputText
                                id='OBSERVACION'
                                label='Observación'
                                value={OBSERVACION}
                                onChange={(e)=>this.handleChange(e)}
                            />
                        </Col>
                        <Col sm={6}>
                            <InputText
                                id='DESCRIPCION'
                                label='Descripción'
                                value={DESCRIPCION}
                                onChange={(e)=>this.handleChange(e)}
                            /> 
                        </Col>
                    </Row>   
                    <Row form>
                        <Col sm={12}>
                            <InputText
                                id='DOMINIO'
                                label='dominio'
                                value={DOMINIO}
                                onChange={(e)=>this.handleChange(e)}
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
