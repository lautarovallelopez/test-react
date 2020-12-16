import React from 'react';
import PropTypes from 'prop-types';
import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Logo from '@public/images/logoIndecRight-235.png'
import {
    faTabletAlt, faUsers, faUserFriends, faDatabase, faStickyNote, faCookie, faAd
} from '@fortawesome/free-solid-svg-icons';
import head from 'lodash/head';
import includes from 'lodash/includes';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';

const NavItems = ({redirect}) => (
    <Nav className="mr-auto" navbar>
        <NavItem>
            <NavLink onClick={() => redirect('/')}>
                <img src={Logo} style={{width:'100px'}}/>
            </NavLink>
        </NavItem>
    </Nav>
);

NavItems.propTypes = {
    redirect: PropTypes.func.isRequired
};

export default NavItems;
