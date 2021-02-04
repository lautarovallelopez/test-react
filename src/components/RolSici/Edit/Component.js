import React, {Component} from 'react';
import {Title} from '@reutilizables';
import { Form, Row, Col, Button, Container} from 'reactstrap';
import { Select, InputNumber, InputText, PrimaryButton} from '../../../reutilizables';
import PropTypes from 'prop-types';
class Edit extends Component{
    componentDidMount(){
        this.props.fetchUsuarios();
        this.props.fetchTipoDeRoles();
        const {ID_USUARIO, ID_ROL_USUARIO} = this.props.match.params;
        if(ID_ROL_USUARIO && ID_USUARIO){
            this.props.getOne({ID_USUARIO, ID_ROL_USUARIO})
        }
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
                                options={this.props.usuarios}
                                onChange={(e)=>this.handleChange(e)}
                                selectedOne={ID_USUARIO}
                                optionValue='ID_USUARIO'
                                optionLabel='USUARIO'
                            />
                        </Col>
                    </Row>
                    <Row form >
                        <Col>
                            <Select
                                id='ID_ROL_USUARIO'
                                label='Rol Usuario'
                                options={this.props.tipoDeRoles}
                                onChange={(e)=>this.handleChange(e)}
                                selectedOne={ID_ROL_USUARIO}
                                optionValue='ID_ROL_USUARIO'
                                optionLabel='ID_ROL_USUARIO'
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
                    <Row form>
                        <Col sm={4}>
                            <Button>
                                Usuario Nomenclador
                            </Button>
                            
                        </Col>
                        <Col sm={4}>
                            <Button>
                                Rol Operativo Variable
                            </Button>
                        </Col>
                        <Col sm={4}>
                            <PrimaryButton
                                label='GUARDAR'
                            />
                        </Col>
                    </Row>    
                    
                </Form>
            </Container>
        );
    }
}

export default Edit;
