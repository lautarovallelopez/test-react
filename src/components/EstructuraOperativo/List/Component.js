import React, {Component} from 'react';
import {Table} from '../../../reutilizables';
import {Container, Row, Col, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import { get } from 'lodash';
class List extends Component{
    componentDidMount(){
        const {id_operativo} = this.props.match.params;
        if(id_operativo){
            this.props.fetchEstructura(id_operativo);
        }
    }
    getThisUrl(){
        const {url} = this.props.match;
        return url;
    }
    render(){
        const {estructura, tableHeaders, formHeaders} = this.props;
        return(
            <Container>
                <Row>
                    <Col>
                        <Button color="primary" tag={Link} to={`${this.getThisUrl()}/new`}>Agregar Campo</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="table-responsive">
                        <Table
                            rows = {estructura}
                            headers = {tableHeaders}
                            information = {formHeaders}
                            links = {[
                                {
                                    url : this.getThisUrl(),
                                    id : 'id_estructura',
                                    label : 'Editar'
                                }
                            ]}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default List;
