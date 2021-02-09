/* global VERSION */
import React from 'react';
import {Row, Col, Media} from 'reactstrap';
import footerLogo from '@public/images/logo.svg';
const Footer = () => (
    <footer
        style={{marginTop : '10px'}}
    >
        <Row>
            <Col sm={3} md={3} className={`m-0 p-0 mt-2`}>
                <div className={`version small`}>
                    Version&nbsp;
                    {VERSION}
                    <br/>
                    SICI
                </div>
            </Col>
            <Col sm={3} md={3} className={`m-0 p-0 mt-2`}>
                <q className={`small`}>
                    Usuario
                    &nbsp;- 2020
                </q>
            </Col>
            <Col sm={3} md={3} className={`m-0 p-0 mt-2`}>
                <div className={`version small`}>
                    Mesa de Servicios
                    <br/>
                    De Lunes a Viernes Hábiles (011) 5031 4630
                </div>
            </Col>
            <Col sm={3} md={3} className={`m-0 p-0 mt-2`}>
                <img src={footerLogo}/>
            </Col>
        </Row>
    </footer>
);

export default Footer;
