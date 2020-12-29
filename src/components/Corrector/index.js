import React from 'react';

import {Container, Row, Col, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const Corrector = ()=>(
    <Container>
                
                <Row>
                    <Col >
                        <h1>Corrector</h1>
                    </Col>
                    <Col>
                        <Button className='float-right' color="primary" tag={Link} to='/operativo/new'>Nuevo Operativo</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        
                    </Col>
                </Row>
            </Container>
);
export default Corrector;