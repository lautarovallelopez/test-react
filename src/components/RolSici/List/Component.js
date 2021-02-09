import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Title, Table, Loading, PrimaryButton} from '@reutilizables';
import {isEmpty} from 'lodash';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Edit from '../Edit/Component';
class List extends Component{
    componentDidMount(){
        this.props.fetchRoles();
    }
    render(){
        const {roles, tableHeaders, formHeaders} = this.props;
        return(
            <Container className="themed-container" fluid={true}>
                <Row>
                    <Col >
                        <Title title='ROLES SICI'/>
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                        <PrimaryButton 
                            icono = {faPlus}
                            to='rol-sici/new'
                            label='Agregar Rol Sici'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {isEmpty(roles)?
                            <Loading />
                            :
                            <Table
                                rows = {roles}
                                headers = {tableHeaders}
                                information = {formHeaders}
                                index='ID_USUARIO'
                                acciones = {{
                                    editar:{
                                        to:'rol-sici',
                                        attributes : ['ID_USUARIO', 'ID_ROL_USUARIO']
                                    },
                                    eliminar : {
                                        onClick : (ids)=>this.props.deleteRol(ids),
                                        attributes : ['ID_USUARIO', 'ID_ROL_USUARIO']
                                    }
                                }}
                            />
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default List;
