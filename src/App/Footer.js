/* global VERSION */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faIdCard} from '@fortawesome/free-solid-svg-icons';

import get from 'lodash/get';
import head from 'lodash/head';
import isEmpty from 'lodash/isEmpty';

import User from '@model/user';
import fromState from '@selectors';

const Footer = ({user, currentOperative, roles}) => (
    <footer
        className="hidden-print"
        style={{
            backgroundColor: currentOperative?.color
        }}
    >
        <Row>
            <Col sm={4} md={4} className={`m-0 p-0 mt-2 ml-1 pl-1 ${currentOperative?.text}`}>
                <div className={`version small ${currentOperative?.text}`}>
                    Version&nbsp;
                    {VERSION}
                    <br/>
                    {!isEmpty(user.lastAccess) && (
                        <span className={`version small ${currentOperative?.text}`}>
                            Último Ingreso&nbsp;
                            {new Date(user.lastAccess).toLocaleDateString()}
                        </span>
                    )}
                </div>
                {!!currentOperative?.description && (
                    <span>
                        <b>Operativo:&nbsp;</b>
                        {currentOperative?.description}
                    </span>
                )}
            </Col>
            <Col sm={6} md={6} className={`m-0 p-0 mt-1 ml-1 pl-1 ${currentOperative?.text}`}>
                {!isEmpty(user.username) && (
                    <div className="d-inline">
                        <FontAwesomeIcon icon={faIdCard} size="3x"/>
                        <span className="d-inline-block ml-3">
                            {user.surname}
                            ,&nbsp;
                            {user.name}
                            <br/>
                            {
                                get(
                                    roles,
                                    'name',
                                    null
                                )
                            }
                        </span>
                    </div>
                )}
            </Col>
            <Col>
                <quote className={`small ${currentOperative?.text}`}>
                    <a href="https://www.indec.gob.ar/" target="_blank" rel="noopener noreferrer">@INDEC</a>
                    &nbsp;- 2020
                </quote>
            </Col>
        </Row>
    </footer>
);

Footer.propTypes = {
    user: PropTypes.instanceOf(User),
    currentOperative: PropTypes.shape({
        description: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
    }),
    roles: PropTypes.arrayOf(PropTypes.shape({}))
};

Footer.defaultProps = {
    user: new User(),
    currentOperative: {},
    roles: []
};

const mapStateToProps = state => {
    const user = fromState.Session.getUser()(state);
    const roles = fromState.StaticData.getRoles(head(user.roles))(state);
    const currentOperative = fromState.Session.getCurrentOperative()(state);

    return {
        roles,
        currentOperative,
        user
    };
};

export default connect(mapStateToProps)(Footer);
