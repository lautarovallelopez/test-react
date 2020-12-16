import React, {useState} from 'react';

import {
    Col,
    Container,
    Row,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import {Link} from 'react-router-dom';
import PackageJson from '@root/package.json';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col sm={{size:6, offset:3}} className="text-center">
                    <h3>BIENVENIDO AL SISTEMA SICI</h3>
                    <ListGroup>
                        <ListGroupItem tag={'button', Link} to='/operativo' action >CODIFICACIÓN</ListGroupItem>
                        <ListGroupItem tag="button" action>FUENTES OPERATIVOS</ListGroupItem>
                        <ListGroupItem tag="button" action>VARABLES ESTADISTICAS</ListGroupItem>
                        <ListGroupItem tag="button" action>NOMENCLATURAS</ListGroupItem>
                        <ListGroupItem tag="button" action>DOCUMENTOS</ListGroupItem>
                        <ListGroupItem tag="button" action>CHAT INTERNO</ListGroupItem>
                        <ListGroupItem tag="button" action>MANEJO DE USUARIOS</ListGroupItem>
                        {false && <ListGroupItem disabled tag="button" action>Vestibulum at eros</ListGroupItem>}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}
    

export default Home;
