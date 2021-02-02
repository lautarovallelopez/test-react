import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Title, Table, Loading, PrimaryButton} from '@reutilizables';
import {isEmpty} from 'lodash';
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
                            label='Nuevo Rol Sicidd'
                            to='/rol-sici/new'
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
                                acciones = 'afd'
                            />
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default List;
