import React, {Component} from 'react';
import {Container, Row, Col, Button, Spinner} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Title, Table} from '@reutilizables';
import {isEmpty} from 'lodash';
class List extends Component{
    componentDidMount(){
        this.props.fetchRoles();
    }
    render(){
        const {roles, tableHeaders, formHeaders} = this.props;
        return(
            <Container>
                <Row>
                    <Col >
                        <Title title='ROLES SICI'/>
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                        <Button className='float-right' color="primary" tag={Link} to='/rol-sici/new'>Nuevo Rol Sici</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {isEmpty(roles)?
                            <div style={{textAlign:'center'}}>
                                <Spinner color="primary" />
                                <h2>LOADING ......</h2>
                            </div>
                            :
                            <Table
                                rows = {roles}
                                headers = {tableHeaders}
                                information = {formHeaders}
                                links={[
                                    {
                                        url : 'operativo',
                                        id : 'id_operativo',
                                        label : 'Editar'
                                    }
                                ]}
                            />
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default List;
