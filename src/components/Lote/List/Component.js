import React, {Component} from 'react';
import {Table} from '../../../reutilizables';
import {Container, Row, Col, Button, Alert} from 'reactstrap';
import {Link} from 'react-router-dom';
class List extends Component{
    componentDidMount(){
        const {id_operativo} = this.props.match.params;
        this.props.fetchLotes(id_operativo);
    }
    getThisUrl(){
        const {url} = this.props.match;
        return url;
    }
    render(){
        const {formHeaders, tableHeaders, lotes} = this.props;
        return(
            <Container>
                <Row>
                    <Col>
                        <Button color="primary" tag={Link} to={`${this.getThisUrl()}/new`}>Agregar Lote</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="table-responsive">
                        {
                            lotes.length !== 0 ? 
                            (
                                <Table
                                    information = {formHeaders}
                                    headers = {tableHeaders}
                                    rows = {lotes}
                                    links = {[
                                        {
                                            url : this.getThisUrl(),
                                            id : 'id_lote',
                                            label : 'Editar'
                                        }
                                    ]}
                                />
                            )
                            :
                            (
                                <Alert color="primary">
                                    Este operativo no tiene lotes
                                </Alert>
                            )

                        }
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default List;