import React from 'react';
import PropTypes from 'prop-types';
import {
    Nav,
    NavItem,
    NavLink as NavL
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faTabletAlt, faUsers, faUserFriends, faDatabase, faStickyNote, faCookie
} from '@fortawesome/free-solid-svg-icons';
import head from 'lodash/head';
import includes from 'lodash/includes';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';

const NavItems = ({redirect}) => (
    <Nav className="mr-auto" navbar>
        <NavItem>
            <NavL onClick={() => redirect('/app')}>
                <FontAwesomeIcon icon={faTabletAlt}/>
                &nbsp;App
            </NavL>
        </NavItem>
        <NavItem>
            <NavL onClick={() => redirect('/farm')}>
                <FontAwesomeIcon icon={faUserFriends}/>
                &nbsp;Farm
            </NavL>
        </NavItem>
        <NavItem>
            <NavL onClick={() => redirect('/countries')}>
                <FontAwesomeIcon icon={faCookie}/>
                &nbsp;Paises
            </NavL>
        </NavItem>
        <NavItem>
            <NavL onClick={() => redirect('/operativo')}>
                <FontAwesomeIcon icon={faCookie}/>
                &nbsp;Operativo
            </NavL>
        </NavItem>
        <NavItem>
            <NavL onClick={() => redirect('/tabs')}>
                <FontAwesomeIcon icon={faCookie}/>
                &nbsp;Tabs
            </NavL>
        </NavItem>
    </Nav>
);

NavItems.propTypes = {
    redirect: PropTypes.func.isRequired
};

export default NavItems;
