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
                        <ListGroupItem tag={'button', Link} to='/operativo' action >OPERATIVO</ListGroupItem>
                        <ListGroupItem tag={'button', Link} to='/codificacion' action >CODIFICACIÓN</ListGroupItem>
                        <ListGroupItem tag={'button', Link} to='/fuentes' action>FUENTES OPERATIVOS</ListGroupItem>
                        <ListGroupItem tag={'button', Link} to='/variables' action>VARIABLES ESTADISTICAS</ListGroupItem>
                        <ListGroupItem tag={'button', Link} to='/nomenclaturas' action>NOMENCLATURAS</ListGroupItem>
                        <ListGroupItem tag={'button', Link} to='/documentos' action>DOCUMENTOS</ListGroupItem>
                        <ListGroupItem tag={'button', Link} to='/chat' action>CHAT INTERNO</ListGroupItem>
                        <ListGroupItem tag={'button', Link} to='/usuarios' action>MANEJO DE USUARIOS</ListGroupItem>
                        <ListGroupItem tag={'button', Link} to='/tipo_observacion' action>TIPOS DE OBSERVACIÓN</ListGroupItem>
                        <ListGroupItem tag={'button', Link} to='/subtipo-nomenclador' action>SUBTIPO NOMENCLADOR</ListGroupItem>
                        <ListGroupItem tag={'button', Link} to='/tipo-diccionario' action>TIPO DE DICCIONARIO LINGUISTICO</ListGroupItem>
                        {false && <ListGroupItem disabled tag="button" action>Vestibulum at eros</ListGroupItem>}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}
    

export default Home;
