import React, {Component} from 'react';
import {Table} from '../../../reutilizables';
import {Container, Row, Col, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
class List extends Component{
    componentDidMount(){
        this.props.fetchOperativos();
    }
    render(){
        const {operativos, tableHeaders, formHeaders} = this.props;
        return(
            <Container>
                <Row>
                    <Col>
                        <Button color="primary" tag={Link} to='/operativo/new'>Nuevo Operativo</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="table-responsive">
                        <Table
                            rows = {operativos}
                            headers = {tableHeaders}
                            information = {formHeaders}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default List;
